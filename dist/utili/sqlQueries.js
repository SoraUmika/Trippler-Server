"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randBussByAddress = 'SELECT Address From Businesses Where ID = @RandomBusinessId INTO @RandomBusinessAddress;';
exports.randBussByRatings = 'SELECT Rating From Businesses Where ID = @RandomBusinessId INTO @RandomBusinessRating;';
exports.randBussByHours = 'SELECT Hours From Businesses Where ID = @RandomBusinessId INTO @RandomBusinessHour;';
exports.randBussByWebAddr = 'SELECT WebAddress From Businesses Where ID = @RandomBusinessId INTO @RandomWebAddress;';
exports.randBussByBussName = 'SELECT BusinessName From Businesses Where ID = @RandomBusinessId INTO @RandomBusinessName;';
exports.createNewAccount = 'INSERT INTO Users (Username, FirstName, LastName) VALUES (?,?,?)';
//# sourceMappingURL=sqlQueries.js.map