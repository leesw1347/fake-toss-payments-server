const EXTENSION = __filename.substr(-2);
if (EXTENSION === "js")
    require("source-map-support").install();
    
import * as helper from "encrypted-nestjs";
import * as nest from "@nestjs/common";
import { IPassword } from "encrypted-nestjs";

import { DomainError } from "tstl/exception/DomainError";
import { InvalidArgument } from "tstl/exception/InvalidArgument";
import { OutOfRange } from "tstl/exception/OutOfRange";

import { VolatileMap } from "./utils/VolatileMap";

export namespace Configuration
{
    export const ASSETS = __dirname + "/../assets";
    export const EXPIRATION: VolatileMap.IExpiration = {
        time: 3 * 60 * 1000,
        capacity: 1000
    };
    
    export const API_PORT = 30771;
    export const ENCRYPTION_PASSWORD: Readonly<IPassword> = {
        key: "szngncCKO7wZTuayfhkRNlBfI5Nl5N88",
        iv: "M0Yvmgrk58GBvUAt"
    };
    export const WEBHOOK_URL: string = `http://127.0.0.1:${API_PORT}/internal/webhook`;
}

// CUSTOM EXCEPTIION CONVERSION
helper.ExceptionManager.insert(OutOfRange, exp => new nest.NotFoundException(exp.message));
helper.ExceptionManager.insert(InvalidArgument, exp => new nest.ConflictException(exp.message));
helper.ExceptionManager.insert(DomainError, exp => new nest.UnprocessableEntityException(exp.message));

// TRACE EXACT SERVER INTERNAL ERROR
helper.ExceptionManager.insert(Error, exp => new nest.InternalServerErrorException({
    message: exp.message,
    name: exp.name,
    stack: exp.stack
}));