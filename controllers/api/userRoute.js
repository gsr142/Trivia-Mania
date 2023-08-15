const router = require('express').Router();
const { User } = require('../../models');

router.post("/newplayer", async (req, res) => {
    try {
        const newUser = await User.create({
            name: req.body.username,
            password: req.body.password,
        });
        
        req.session.save(() => {
            req.session.user_id = newUser.id;
            req.session.username = newUser.name;
            req.session.logged_in = true; // login status
            req.session.high_score = newUser.highscore
            console.log(req.session.high_score)
            console.log('New user created:', newUser);
    
            res.status(200).json(newUser);
        });

    } catch (err) {
        console.error('Error creating user:', err);
        res.status(400).json({ error: "User creation failed." });
    }
});

router.put("/", async (req, res) => {
    try {
        const user = await User.update(req.body, {
            where: {
                id: req.session.user_id
            }
        });
        
        // req.session.save(() => {
        //     req.session.user_id = user.id;
        //     req.session.username = newUser.name;
        //     req.session.logged_in = true; // login status
        //     req.session.high_score = userData.high_score
        // });

        console.log('User updated:', user);

        res.status(200).json(user);
    } catch (err) {
        console.error('Error upating user:', err);
        res.status(400).json({ error: "User creation failed." });
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { name: req.body.name } });

        if (!userData) {
            console.log('Incorrect username or password:', req.body.name);
            res.status(400).json({ message: 'Incorrect username or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            console.log('Incorrect password for user:', req.body.name);
            res.status(400).json({ message: 'Incorrect username or password, please try again' });
            return;
        }
        console.log(userData.id)
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            req.session.high_score = userData.highscore
            res.json({ user: userData, message: 'Ready to test your trivia knowledge?!' });
            // console.log('User logged in:', userData);
        });



    } catch (err) {
        console.error('Error during login:', err);
        res.status(400).json(err);
    }
});


router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        console.log('session destroyed!');
        req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
        res.status(404).end();
    }
  });

router.get('/', async (req, res) => {
    try{
        const userData = await User.findAll();
        console.log('hello', userData);
        res.json(userData)
    }catch (err) {
        console.log(err)
        res.status(err)
    }
})
module.exports = router;