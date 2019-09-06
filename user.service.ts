let lastId: number = 0;
let line: IUser[] = [];
let users: IUser[] = [];

interface IUser {
  /**
   * @interface IUser
   * Interface for classes that represent a user
   */
  id?: number;
  name: string;
  email: string;
  gender: string;
  linePosition?: number;
}

export function createUser (name: string, email: string, gender: string): IUser {
  /**
   * @function createUser
   * Function for user registration
   *
   * @param name - The user name
   * @param email - The user email
   * @param gender - The gender of the user
   * @returns An object of type IUser, containing the id, name, email and gender of the user
   */
  if (name === undefined || email === undefined || gender === undefined) {
    throw new Error('param-not-found');
  }
  if (users.find(user => user.email === email) !== undefined) {
    throw new Error('user-exists');
  }
  lastId++;
  let user: IUser = {id: lastId, name, email, gender};
  users.push(user);
  return user;
}

export function addToLine (id): number {
  /**
   * @function addToLine
   * Function to place a user at the last queue position
   *
   * @param id - The user id
   * @returns The user's position in the queue
   */
  if (line.find(user => user.id === id) !== undefined) {
    throw new Error('user-exists');
  }
  let user: IUser = users.find(user => {
    return user.id == id;
  });
  line.push(user);
  return (line.indexOf(user));
}

export function findPosition (email): number {
  /**
   * @function findPosition
   * Function that returns user position from email
   *
   * @param email - The user email
   * @returns The user's position in the queue
   */
  let linePosition: number = line.findIndex(user => {
    return user.email == email;
  });
  return linePosition;
}

export function showLine (): IUser[] {
  /**
   * @function showLine
   * Function that lists queue users and their position
   *
   * @returns A list of users objects (name, gender and email) and their position in the queue (sorting from first to last)
   */
  let usersLine: IUser[] = line.map((user, index) => {
    return {name: user.name, gender: user.gender, email: user.email, linePosition: index};
  });
  return usersLine;
}

export function filterLine (gender): IUser[] {
  /**
   * @function filterLine
   * Function that lists the filtered users of a parameter (gender)
   *
   * @param gender - The gender of the user
   * @returns A list of users objects (name, gender and email) and their position in the queue (sorting from first to last)
   */
  let usersGender: IUser[] = showLine().filter(user => {
    return user.gender == gender;
  });
  return usersGender;
}

export function popLine (): IUser {
  /**
   * @function popLine
   * Function that removes the first person from the queue
   *
   * @returns An object of type IUser, containing the id, name, email and gender of the user
   */
  return line.shift();
}