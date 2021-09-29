const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const { filters } = require("../utils/common");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

// Schema
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide an email address"],
    unique: true,
    match: [filters.email, "Please provide a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 6,
    select: false,
  },
  name: {
    type: String,
    default: "",
  },
  company: {
    type: String,
    default: "",
  },
  resetPasswordExpire: {
    type: Date,
    select: false,
  },
  resetPasswordToken: {
    type: String,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Hooks
UserSchema.pre("save", async function saltAndHashPassword(next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.pre("remove", async function (next) {
  await this.model("Alert").deleteMany({ user: this._id });
  await this.model("Feedback").deleteMany({ user: this._id });
  await this.model("Tag").deleteMany({ user: this._id });
  console.log(
    `Alerts, feedbacks, and tags of user ${this._id} have been removed`.green
  );
  next();
});

// Methods
UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE_DAYS,
  });
};

UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

UserSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetPasswordExpire =
    Date.now() + parseInt(process.env.RESET_PASSWORD_EXPIRE_MS, 10);
  return resetToken;
};

module.exports = mongoose.model("User", UserSchema);
