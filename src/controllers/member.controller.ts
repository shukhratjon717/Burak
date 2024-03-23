import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/Error";
import moment from "moment";

// REACT

const memberService = new MemberService();

const memberController: T = {};
memberController.signup = async (req: Request, res: Response) => {
  try {
    console.log("signup");
    console.log(" ");

    const input: MemberInput = req.body,
      result: Member = await memberService.signup(input);
    // TODO: TOKENS AUTHENTICATION

    console.log(
      `${input.memberNick} is registered as new user at${moment().format(
        "YYYY-MM-DD HH:MM:ss"
      )}`
    );
    res.json({ member: result });
  } catch (err) {
    console.log("Error, signup:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
    // res.json({ err });
  }
};

memberController.login = async (req: Request, res: Response) => {
  try {
    console.log("login \n");
    const input: LoginInput = req.body,
      result = await memberService.login(input);
    // TODO: TOKENS AUTHENTICATION

    console.log(
      `${input.memberNick} logged in ${moment().format(
        "YYYY-MM-DD HH:MM:ss"
      )} \n`
    );
    res.json({ member: result });
  } catch (err) {
    console.log("Error, getLogin:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
    //    res.json({ })
  }
};

export default memberController;
