// Every single schema file you ever create will follow this exact boilerplate structure:
// Should be in a folder named "models" and the schema file must be capitalized like "Cat.js"
// Model: A Model is just a special JavaScript class generated from your schema blueprint. It gives you the actual power to run commands like .save() or .find() on your database.

const mongoose = require('mongoose'); // 1. Bring in the mongoose tool

// 2. Define the blueprint structure
const catSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  isFriendly: { type: Boolean, default: true }
});

/* 
            type (The Bouncer):
The type property is mandatory when you are using a configuration object. It tells Mongoose what category of data is allowed to enter this field.

If someone tries to send a data type that doesn't match, Mongoose will try to convert it automatically (this is called coercion). For example, if you send the number 123 to a field with type: String, Mongoose will convert it to "123" for you. Common types include:

- String (for text)
- Number (for integers or decimals)
- Boolean (for true/false)
- Date (for timestamps)
- Array or [String] (for lists)

            required (The Gatekeeper): 
Setting required: true means a document cannot be saved to the database unless this exact key has a valid value.

If a frontend user submits a form and leaves out the email field, Mongoose will immediately stop the operation, throw a validation error, and refuse to save the document.

            default (The Safety Net):
The default property specifies what value Mongoose should automatically inject if the incoming data completely leaves that key out.

Looking at your example:
*/
const userSchema = new mongoose.Schema({
  email: { type: String, required: true } 
});

/*
When a new user registers, the frontend usually doesn't send a followerCount property. Because you have default: 0, Mongoose automatically saves that new user with followerCount: 0.

This prevents your database from saving fields as undefined or null, saving you from writing a ton of if/else checks later on in your frontend code!

How They Work Together (The Mental Model)
When your server executes User.create(req.body), Mongoose runs a quick script that processes these properties in a specific order:

Step 1: Did the incoming data provide this key?
        ├── NO  --> Is there a 'default' value? 
        │           ├── YES --> Use the default value.
        │           └── NO  --> Is it 'required'? 
        │                       ├── YES --> Throw a Validation Error! Stop execution.
        │                       └── NO  --> Leave it blank.
        │
        └── YES --> Does it match the specified 'type'?
                    ├── YES --> Perfect, keep it.
                    └── NO  --> Can Mongoose convert it? (e.g. 55 to "55")
                                ├── YES --> Convert and keep it.
                                └── NO  --> Throw a Cast Error! Stop execution.
*/

// 3. Turn the blueprint into a working model and export it
module.exports = mongoose.model('Cat', catSchema);

/* =================================================================================== */

// EXAMPLE  Schemas: 
// a. Socail Media User Profile:

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  followerCount: { type: Number, default: 0 },
  isPremiumUser: { type: Boolean, default: false }
});

// b. Online Store Product

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  quantityInStock: { type: Number },
  tags: [String] // This means an array of text strings (e.g., ['shoes', 'clearance'])
});