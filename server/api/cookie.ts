

export default defineEventHandler(async(event)=>{
  const user = getCookie(event,'user')
  console.table(user)
  return "hello"
})