module.exports = {
  host: process.env.NODE_ENV === "production" ? process.env.DB_HOST : "localhost",
  port: process.env.NODE_ENV === "production" ? process.env.DB_PORT : 15432,
  username: process.env.NODE_ENV === "production" ? process.env.DB_USER : "dev-username",
  password: process.env.NODE_ENV === "production" ? process.env.DB_PASS : "dev-password",
  database: process.env.NODE_ENV === "production" ? process.env.DB_NAME : "dev-database",
  dialect: "postgres",
  define: {
    timestamps: true
  }
};
