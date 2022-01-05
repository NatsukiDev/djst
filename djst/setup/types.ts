import {Client, ClientOptions} from "discord.js";
import {Logger} from "./log";

export class ModifiedClient extends Client {

    public logger: Logger;


    constructor(options: ClientOptions) {
        super(options);
        this.logger = new Logger(this);
    }

}