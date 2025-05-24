import { Link } from "react-router"

export default function NotFound() {
  return (
    <div className="px-8">
      <h1 className="text-2xl font-bold my-8">404 NotFound</h1>
      <Link to="/" className="underline">Back to home</Link>
    </div>
  )
}
