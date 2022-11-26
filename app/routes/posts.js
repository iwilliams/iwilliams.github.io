import Route from '@ember/routing/route';

export default class PostsRoute extends Route {
    model() {
        const apps = this.modelFor("application");
        return apps.find(app => app.name === "Posts");
    }
}
