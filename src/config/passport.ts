import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import * as user_repository from "../repository/user.repository";
import bcrypt from "bcryptjs";
import { User_interface as User } from "../interfaces/user.interface";

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user: User | null =
        await user_repository.getUserByUsername(username);
      if (!user) {
        return done(null, false, { message: "User not exist" });
      }
      const match: boolean = await bcrypt.compare(password, user.password);
      if (!match) {
        return done(null, false, { message: "Password is incorrect" });
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }),
);


passport.serializeUser((user, done) => {
  return done(null, user.id);
});

passport.deserializeUser(async (id: unknown, done) => {
  try {
    const user_id = Number(id);
    if (isNaN(user_id)) {
      return done(new Error("Invalid user ID"));
    }
    const user: User | null = await user_repository.getUserById(user_id);
    if (!user) {
      return done(null, false);
    }
    return done(null, user);
  } catch (error) {
    return done(error);
  }
});

export default passport;
