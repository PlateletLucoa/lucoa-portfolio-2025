export default defineNuxtRouteMiddleware((to) => {
    const runtimeConfig = useRuntimeConfig();

    if (runtimeConfig.public.isUnderConstruction && to.path !== '/under-construction') {
        return navigateTo('/under-construction');
    }
})