export default function taskReducer(count, action) {
  switch (action.type) {
    case "increment":
      return count + 1
    case "decrement":
      return count - 1
    case "reset":
      return 0
    default:
      return count
  }
}