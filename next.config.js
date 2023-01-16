/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: { // para acessar a variavel de ambiente caminho: process.env.bdPath
    bdPath: "mysql..."
  }
}

module.exports = nextConfig
