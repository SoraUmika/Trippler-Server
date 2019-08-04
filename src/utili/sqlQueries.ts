
export const randBussByAddress = 'SELECT Address From Businesses Where ID = @RandomBusinessId INTO @RandomBusinessAddress;'
export const randBussByRatings = 'SELECT Rating From Businesses Where ID = @RandomBusinessId INTO @RandomBusinessRating;'
export const randBussByHours = 'SELECT Hours From Businesses Where ID = @RandomBusinessId INTO @RandomBusinessHour;'
export const randBussByWebAddr = 'SELECT WebAddress From Businesses Where ID = @RandomBusinessId INTO @RandomWebAddress;'
export const randBussByBussName = 'SELECT BusinessName From Businesses Where ID = @RandomBusinessId INTO @RandomBusinessName;'

export const createNewAccount = 'INSERT INTO Users (Username, FirstName, LastName) VALUES (?,?,?)';
