// Vi phạm: Dùng 'any' và sai type
let data: any = 123;
function getUser(user: any): any {
  return user.name;
}
