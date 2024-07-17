const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const sequelize = require('../src/db/conn');

class User extends Sequelize.Model { }

User.init(
  {
    firstname: {
      type: Sequelize.STRING
    },
    lastname: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING,
      unique: true
    },
    profile_image: {
      type: Sequelize.STRING
    },
    social_id: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    dob: {
      type: Sequelize.DATE
    },
    otp: {
      type: Sequelize.INTEGER,
    },
    zodiac_sign: {
      type: Sequelize.STRING
    },
    interests: {
      type: Sequelize.JSON
    },
    total_likes: {
      type: Sequelize.INTEGER
    },
    is_active: {
      type: Sequelize.BOOLEAN
    },
    status: {
      type: Sequelize.INTEGER
    },
    is_blocked: {
      type: Sequelize.BOOLEAN
    },
    is_social: {
      type: Sequelize.BOOLEAN
    },
    social_type: {
      type: Sequelize.STRING
    },
    mobile: {
      type: Sequelize.STRING
    },
    bio: {
      type: Sequelize.TEXT
    },
    languages: {
      type: Sequelize.JSON
    },
    religion: {
      type: Sequelize.JSON
    },
    height: {
      type: Sequelize.STRING
    },
    age_range: {
      type: Sequelize.STRING
    },
    relationship_goals: {
      type: Sequelize.JSON
    },
    interest_in: {
      type: Sequelize.ENUM('men', 'women')
    },
    gender: {
      type: Sequelize.ENUM('Male', 'Female'),
    },
    date_raw: {
      type: Sequelize.JSON
    },
    is_setup_completed: {
      type: Sequelize.BOOLEAN
    }
  }, {
  sequelize,
  modelName: 'User'
},
  {
    hooks: {
      beforeCreate: async (user, options) => {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      },
    },
  });

module.exports = User;