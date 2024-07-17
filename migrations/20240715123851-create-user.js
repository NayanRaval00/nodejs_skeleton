'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull: true
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      profile_image: {
        type: Sequelize.STRING,
        allowNull: true
      },
      social_id: {
        type: Sequelize.STRING,
        allowNull: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: true
      },
      otp: {
        type: Sequelize.STRING,
        allowNull: true
      },
      dob: {
        type: Sequelize.DATE,
        allowNull: true
      },
      type_of_relation: {
        type: Sequelize.JSON,
        allowNull: true
      },
      hobbies: {
        type: Sequelize.JSON,
        allowNull: true
      },
      zodiac_sign: {
        type: Sequelize.STRING,
        allowNull: true
      },
      interests: {
        type: Sequelize.JSON,
        allowNull: true
      },
      total_likes: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      is_blocked: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
      },
      is_social: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
      },
      social_type: {
        type: Sequelize.STRING,
        allowNull: true
      },
      mobile: {
        type: Sequelize.STRING,
        allowNull: true
      },
      bio: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      languages: {
        type: Sequelize.JSON,
        allowNull: true
      },
      religion: {
        type: Sequelize.JSON,
        allowNull: true
      },
      height: {
        type: Sequelize.STRING,
        allowNull: true
      },
      age_range: {
        type: Sequelize.STRING,
        allowNull: true
      },
      relationship_goals: {
        type: Sequelize.JSON,
        allowNull: true
      },
      interest_in: {
        type: Sequelize.ENUM('men', 'women'),
        allowNull: true
      },
      gender: {
        type: Sequelize.ENUM('Male', 'Female'),
        allowNull: true,
        defaultValue: "Male",
      },
      date_raw: {
        type: Sequelize.JSON,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};