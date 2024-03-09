import {Request, Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.servie"

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log("goHome")
        res.send("Home Page")
    } catch (err) {
        console.log("Error, goHome:", err)
    }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin")
        res.send("Login Page")
    } catch (err) {
        console.log("Error, getLogin:", err)
    }
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup")
        res.send("Signup Page")
    } catch (err) {
        console.log("Error, getSignup:", err)
    }
};

restaurantController.processLogin = (req: Request, res: Response) => {
    try {
        console.log("processLogin")
        res.send("Done")

    } catch (err) {
        console.log("Error, getLogin:", err)
    }
};

restaurantController.processSignup = (req: Request, res: Response) => {
    try {
        console.log("processSignup")
        res.send("Done")

    } catch (err) {
        console.log("Error, processSignup:", err)
    }
};

export default restaurantController;