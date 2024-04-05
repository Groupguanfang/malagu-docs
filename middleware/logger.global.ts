export default defineNuxtRouteMiddleware((to, from) => {
  console.log("[REQUEST]", `TO [${to.fullPath}]`, `FROM [${from.fullPath}]`);
});
