import "reflect-metadata";
import { DataSource } from "typeorm";
import { CreateUsersTable1705752946855 } from "./migrations/1724245906594-CreateUsersTable";
import { CreateSeedUsersTable1664154782764 } from "./migrations/1724246005270-CreateSeedUsersTable";
import { CreatePostsTable1706640334402 } from "./migrations/1724443836382-CreatePostsTable";
import { CreateProjectTable1706705106837 } from "./migrations/1724510279670-CreateProjectTable";
import { CreateUserProjectTable1706710964459 } from "./migrations/1724510283830-CreateUserProjectTable";
import User from "../app/entities/Users";
import Post from "../app/entities/Posts";
import Project from "../app/entities/Projects";
import UserProject from "../app/entities/UsersProjects";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "1234",
  database: "teste",
  synchronize: true,
  logging: false,
  entities: [User, Post, Project, UserProject],
  migrations: [
    CreateUsersTable1705752946855,
    CreateSeedUsersTable1664154782764,
    CreatePostsTable1706640334402,
    CreateProjectTable1706705106837,
    CreateUserProjectTable1706710964459,
  ],
  subscribers: [],
});
