const router = require('express').Router();
const { User } = require('../../models');

router.post("/newplayer", async (req, res) => {
    try {
        // Create a new user using the User model, based on the data received from the request body
        const newUser = await User.create({
            name: req.body.username,
            password: req.body.password,
        });
        
        // Save user-related information to the session
        req.session.save(() => {
            // Set session variables with user-related data
            req.session.user_id = newUser.id; // User's ID
            req.session.username = newUser.name; // User's name
            req.session.logged_in = true; // Set login status to true
            req.session.high_score = newUser.highscore; // User's high score
            console.log(req.session.high_score); // Log the user's high score
            console.log('New user created:', newUser); // Log the newly created user
    
            // Respond with a success of the newly created user's data in JSON format
            res.status(200).json(newUser);
        });

    } catch (err) {
        // If an error occurs during user creation, logging the error and respond with an error status code (400)
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
        
        console.log('User updated:', user);

        res.status(200).json(user);
    } catch (err) {
        console.error('Error upating user:', err);
        res.status(400).json({ error: "User updated" });
    }
});

router.post('/login', async (req, res) => {
    try {
        // Find a user in the database based on the provided username
        const userData = await User.findOne({ where: { name: req.body.name } });

        // If no user with the provided username is found
        if (!userData) {
            console.log('Incorrect username or password:', req.body.name);
            res.status(400).json({ message: 'Incorrect username or password, please try again' });
            return;
        }

        // Check if the provided password matches the stored password for the user
        const validPassword = await userData.checkPassword(req.body.password);

        // If the provided password is not valid for the user
        if (!validPassword) {
            console.log('Incorrect password for user:', req.body.name);
            res.status(400).json({ message: 'Incorrect username or password, please try again' });
            return;
        }

        // If username and password are valid, store user-related data in the session
        req.session.save(() => {
            req.session.user_id = userData.id; // User's ID
            req.session.logged_in = true; // Set login status to true
            req.session.high_score = userData.highscore; // User's high score
            res.json({ user: userData, message: 'Ready to test your trivia knowledge?!' });
        });

    } catch (err) {
        // If an error occurs during login, log the error and respond with an error status code (400)
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