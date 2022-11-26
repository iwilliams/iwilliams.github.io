import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PostsIndexRoute extends Route {
    @service router;

    model() {
        return Object.keys(this.router._router._routerMicrolib.recognizer.names)
            .filter(name => name.startsWith('posts.') && !name.includes(".error") && !name.includes("_error") && !name.includes(".loading") && !name.includes("_loading") && name !== "posts.index")
            .map((route) => { 
                const name = route.split('.')[1];
                return { 
                    route, 
                    name: name.split("-").map((name, index) => index === 0 ? `[${name}]` : name).join(" ")
                } 
            });
    }
}
