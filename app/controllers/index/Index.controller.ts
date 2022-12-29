import express from "express";

export class IndexController {
    private request: express.Request;
    private response: express.Response;

    constructor(request: express.Request, response: express.Response) {
        this.request = request;
        this.response = response;
    }

    public render() {
        this.response.render("pages/index");
    }
}
