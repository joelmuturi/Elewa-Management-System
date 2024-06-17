import sql from 'mssql/msnodesqlv8';

const dbConfig = {
  database: 'Elewa_db', // Your database name
  server: 'DESKTOP-VUJOT7P\SQLEXPRESS', // Use 'localhost' if running locally or the server name/IP address
  driver: 'msnodesqlv8',
  options: {
    trustedConnection: true, // Use Windows Authentication
    trustServerCertificate: true // Use true for local dev / self-signed certs
  }
};

const pool = new sql.ConnectionPool(dbConfig);

pool.connect().then(() => {
  console.log('Connected to MSSQL database using Windows Authentication');
}).catch(err => {
  console.error('Database connection failed:', err);
});

export default pool;
