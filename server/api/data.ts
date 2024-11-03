export default defineEventHandler(async (event) => {
  const body = await readBody(event)
 
  const { test, name } = body
  if (!test||!name){
    return []
  }
 setResponseStatus(event, 202)
 
 const data =[
   {
     id:1,
     test: test,
     name: name
   }
 ]
 setCookie(event,'user',data)
 return data
})
