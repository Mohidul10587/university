import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  default_user_pass: process.env.DEFAULT_USER_PASSWORD,
}

// O3Nw5mUjMNa3qEhl

// mongodb+srv://mohid10587:O3Nw5mUjMNa3qEhl@cluster0.pw2bjju.mongodb.net/?retryWrites=true&w=majority
