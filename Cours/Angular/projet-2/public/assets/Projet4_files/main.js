// src/main.ts
import { bootstrapApplication } from "/@fs/Users/ken/Documents/Formation/ADRAR/Cours/Angular/projet-4/.angular/cache/18.2.5/vite/deps/@angular_platform-browser.js?v=0a0a79ef";

// src/app/app.config.ts
import { provideZoneChangeDetection } from "/@fs/Users/ken/Documents/Formation/ADRAR/Cours/Angular/projet-4/.angular/cache/18.2.5/vite/deps/@angular_core.js?v=0a0a79ef";
import { provideRouter } from "/@fs/Users/ken/Documents/Formation/ADRAR/Cours/Angular/projet-4/.angular/cache/18.2.5/vite/deps/@angular_router.js?v=0a0a79ef";

// src/app/app.routes.ts
var routes = [];

// src/app/app.config.ts
import { provideClientHydration } from "/@fs/Users/ken/Documents/Formation/ADRAR/Cours/Angular/projet-4/.angular/cache/18.2.5/vite/deps/@angular_platform-browser.js?v=0a0a79ef";
var appConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration()]
};

// src/app/app.component.ts
import { Component as Component4 } from "/@fs/Users/ken/Documents/Formation/ADRAR/Cours/Angular/projet-4/.angular/cache/18.2.5/vite/deps/@angular_core.js?v=0a0a79ef";
import { RouterOutlet } from "/@fs/Users/ken/Documents/Formation/ADRAR/Cours/Angular/projet-4/.angular/cache/18.2.5/vite/deps/@angular_router.js?v=0a0a79ef";

// src/app/component/liste-taches-component/liste-taches-component.component.ts
import { Component as Component2 } from "/@fs/Users/ken/Documents/Formation/ADRAR/Cours/Angular/projet-4/.angular/cache/18.2.5/vite/deps/@angular_core.js?v=0a0a79ef";
import { CommonModule } from "/@fs/Users/ken/Documents/Formation/ADRAR/Cours/Angular/projet-4/.angular/cache/18.2.5/vite/deps/@angular_common.js?v=0a0a79ef";

// src/app/component/tache-component/tache-component.component.ts
import { Component, Input, Output, EventEmitter } from "/@fs/Users/ken/Documents/Formation/ADRAR/Cours/Angular/projet-4/.angular/cache/18.2.5/vite/deps/@angular_core.js?v=0a0a79ef";
import * as i0 from "/@fs/Users/ken/Documents/Formation/ADRAR/Cours/Angular/projet-4/.angular/cache/18.2.5/vite/deps/@angular_core.js?v=0a0a79ef";
var TacheComponentComponent = class _TacheComponentComponent {
  item;
  tacheSupprimee = new EventEmitter();
  delete() {
    this.tacheSupprimee.emit(this.item.id);
  }
  static \u0275fac = function TacheComponentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TacheComponentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _TacheComponentComponent, selectors: [["app-tache-component"]], inputs: { item: "item" }, outputs: { tacheSupprimee: "tacheSupprimee" }, standalone: true, features: [i0.\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[3, "click"]], template: function TacheComponentComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.\u0275\u0275elementStart(0, "p", 0);
      i0.\u0275\u0275listener("click", function TacheComponentComponent_Template_p_click_0_listener() {
        return ctx.delete();
      });
      i0.\u0275\u0275text(1);
      i0.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
      i0.\u0275\u0275advance();
      i0.\u0275\u0275textInterpolate(ctx.item.nom);
    }
  } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(TacheComponentComponent, { className: "TacheComponentComponent" });
})();

// src/app/component/liste-taches-component/liste-taches-component.component.ts
import * as i03 from "/@fs/Users/ken/Documents/Formation/ADRAR/Cours/Angular/projet-4/.angular/cache/18.2.5/vite/deps/@angular_core.js?v=0a0a79ef";

// src/app/services/tasklist.service.ts
import { Injectable } from "/@fs/Users/ken/Documents/Formation/ADRAR/Cours/Angular/projet-4/.angular/cache/18.2.5/vite/deps/@angular_core.js?v=0a0a79ef";
import * as i02 from "/@fs/Users/ken/Documents/Formation/ADRAR/Cours/Angular/projet-4/.angular/cache/18.2.5/vite/deps/@angular_core.js?v=0a0a79ef";
var TasklistService = class _TasklistService {
  nouvelleTache = "";
  taches = [
    {
      id: 0,
      nom: "Vaisselle",
      completed: false
    },
    {
      id: 1,
      nom: "M\xE9nage",
      completed: false
    },
    {
      id: 2,
      nom: "Arroser les plantes",
      completed: false
    }
  ];
  counter = 0;
  displayTaskList() {
    return this.taches;
  }
  recevoirTacheSuppr(id) {
    console.log(id);
    this.taches.splice(id, 1);
  }
  getNouvelleTache(tache) {
    if (this.nouvelleTache) {
      return this.nouvelleTache = tache;
    }
  }
  ajoutTache() {
    this.taches.push(this.nouvelleTache);
    this.nouvelleTache = "";
  }
  constructor() {
  }
  static \u0275fac = function TasklistService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TasklistService)();
  };
  static \u0275prov = /* @__PURE__ */ i02.\u0275\u0275defineInjectable({ token: _TasklistService, factory: _TasklistService.\u0275fac, providedIn: "root" });
};

// src/app/component/liste-taches-component/liste-taches-component.component.ts
import * as i2 from "/@fs/Users/ken/Documents/Formation/ADRAR/Cours/Angular/projet-4/.angular/cache/18.2.5/vite/deps/@angular_common.js?v=0a0a79ef";
function ListeTachesComponentComponent_app_tache_component_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i03.\u0275\u0275getCurrentView();
    i03.\u0275\u0275elementStart(0, "app-tache-component", 1);
    i03.\u0275\u0275listener("tacheSupprimee", function ListeTachesComponentComponent_app_tache_component_1_Template_app_tache_component_tacheSupprimee_0_listener($event) {
      i03.\u0275\u0275restoreView(_r1);
      const ctx_r1 = i03.\u0275\u0275nextContext();
      return i03.\u0275\u0275resetView(ctx_r1.recevoirTacheSuppr($event));
    });
    i03.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i03.\u0275\u0275property("item", item_r3);
  }
}
var ListeTachesComponentComponent = class _ListeTachesComponentComponent {
  taskListService;
  taches = [];
  tacheSupprimee = "";
  constructor(taskListService) {
    this.taskListService = taskListService;
    this.taches = this.taskListService.displayTaskList();
  }
  recevoirTacheSuppr(id) {
    this.taches = this.taskListService.recevoirTacheSuppr(id);
  }
  static \u0275fac = function ListeTachesComponentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListeTachesComponentComponent)(i03.\u0275\u0275directiveInject(TasklistService));
  };
  static \u0275cmp = /* @__PURE__ */ i03.\u0275\u0275defineComponent({ type: _ListeTachesComponentComponent, selectors: [["app-liste-taches-component"]], standalone: true, features: [i03.\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[3, "item", "tacheSupprimee", 4, "ngFor", "ngForOf"], [3, "tacheSupprimee", "item"]], template: function ListeTachesComponentComponent_Template(rf, ctx) {
    if (rf & 1) {
      i03.\u0275\u0275elementStart(0, "ul");
      i03.\u0275\u0275template(1, ListeTachesComponentComponent_app_tache_component_1_Template, 1, 1, "app-tache-component", 0);
      i03.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
      i03.\u0275\u0275advance();
      i03.\u0275\u0275property("ngForOf", ctx.taches);
    }
  }, dependencies: [CommonModule, i2.NgForOf, TacheComponentComponent] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassDebugInfo(ListeTachesComponentComponent, { className: "ListeTachesComponentComponent" });
})();

// src/app/component/ajout-taches-component/ajout-taches-component.component.ts
import { Component as Component3 } from "/@fs/Users/ken/Documents/Formation/ADRAR/Cours/Angular/projet-4/.angular/cache/18.2.5/vite/deps/@angular_core.js?v=0a0a79ef";
import { FormsModule } from "/@fs/Users/ken/Documents/Formation/ADRAR/Cours/Angular/projet-4/.angular/cache/18.2.5/vite/deps/@angular_forms.js?v=0a0a79ef";
import { CommonModule as CommonModule2 } from "/@fs/Users/ken/Documents/Formation/ADRAR/Cours/Angular/projet-4/.angular/cache/18.2.5/vite/deps/@angular_common.js?v=0a0a79ef";
import * as i04 from "/@fs/Users/ken/Documents/Formation/ADRAR/Cours/Angular/projet-4/.angular/cache/18.2.5/vite/deps/@angular_core.js?v=0a0a79ef";
import * as i22 from "/@fs/Users/ken/Documents/Formation/ADRAR/Cours/Angular/projet-4/.angular/cache/18.2.5/vite/deps/@angular_forms.js?v=0a0a79ef";
var AjoutTachesComponentComponent = class _AjoutTachesComponentComponent {
  taskListService;
  nouvelleTache = "";
  constructor(taskListService) {
    this.taskListService = taskListService;
    this.nouvelleTache = this.taskListService.getNouvelleTache(this.nouvelleTache);
  }
  static \u0275fac = function AjoutTachesComponentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AjoutTachesComponentComponent)(i04.\u0275\u0275directiveInject(TasklistService));
  };
  static \u0275cmp = /* @__PURE__ */ i04.\u0275\u0275defineComponent({ type: _AjoutTachesComponentComponent, selectors: [["app-ajout-taches-component"]], standalone: true, features: [i04.\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [["type", "text", 3, "ngModelChange", "ngModel"]], template: function AjoutTachesComponentComponent_Template(rf, ctx) {
    if (rf & 1) {
      i04.\u0275\u0275elementStart(0, "h3");
      i04.\u0275\u0275text(1, "Ajouter une tache");
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(2, "input", 0);
      i04.\u0275\u0275twoWayListener("ngModelChange", function AjoutTachesComponentComponent_Template_input_ngModelChange_2_listener($event) {
        i04.\u0275\u0275twoWayBindingSet(ctx.nouvelleTache, $event) || (ctx.nouvelleTache = $event);
        return $event;
      });
      i04.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
      i04.\u0275\u0275advance(2);
      i04.\u0275\u0275twoWayProperty("ngModel", ctx.nouvelleTache);
    }
  }, dependencies: [CommonModule2, FormsModule, i22.DefaultValueAccessor, i22.NgControlStatus, i22.NgModel] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassDebugInfo(AjoutTachesComponentComponent, { className: "AjoutTachesComponentComponent" });
})();

// src/app/app.component.ts
import * as i05 from "/@fs/Users/ken/Documents/Formation/ADRAR/Cours/Angular/projet-4/.angular/cache/18.2.5/vite/deps/@angular_core.js?v=0a0a79ef";
var AppComponent = class _AppComponent {
  title = "projet-4";
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i05.\u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [i05.\u0275\u0275StandaloneFeature], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      i05.\u0275\u0275elementStart(0, "h1");
      i05.\u0275\u0275text(1, "Liste de taches upgrade");
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275element(2, "app-liste-taches-component");
    }
  }, dependencies: [ListeTachesComponentComponent] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassDebugInfo(AppComponent, { className: "AppComponent" });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluLnRzIiwic3JjL2FwcC9hcHAuY29uZmlnLnRzIiwic3JjL2FwcC9hcHAucm91dGVzLnRzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL2NvbXBvbmVudC9saXN0ZS10YWNoZXMtY29tcG9uZW50L2xpc3RlLXRhY2hlcy1jb21wb25lbnQuY29tcG9uZW50LnRzIiwic3JjL2FwcC9jb21wb25lbnQvbGlzdGUtdGFjaGVzLWNvbXBvbmVudC9saXN0ZS10YWNoZXMtY29tcG9uZW50LmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9jb21wb25lbnQvdGFjaGUtY29tcG9uZW50L3RhY2hlLWNvbXBvbmVudC5jb21wb25lbnQudHMiLCJzcmMvYXBwL2NvbXBvbmVudC90YWNoZS1jb21wb25lbnQvdGFjaGUtY29tcG9uZW50LmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9zZXJ2aWNlcy90YXNrbGlzdC5zZXJ2aWNlLnRzIiwic3JjL2FwcC9jb21wb25lbnQvYWpvdXQtdGFjaGVzLWNvbXBvbmVudC9ham91dC10YWNoZXMtY29tcG9uZW50LmNvbXBvbmVudC50cyIsInNyYy9hcHAvY29tcG9uZW50L2Fqb3V0LXRhY2hlcy1jb21wb25lbnQvYWpvdXQtdGFjaGVzLWNvbXBvbmVudC5jb21wb25lbnQuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBib290c3RyYXBBcHBsaWNhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgYXBwQ29uZmlnIH0gZnJvbSAnLi9hcHAvYXBwLmNvbmZpZyc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC9hcHAuY29tcG9uZW50JztcblxuYm9vdHN0cmFwQXBwbGljYXRpb24oQXBwQ29tcG9uZW50LCBhcHBDb25maWcpXG4gIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuIiwiaW1wb3J0IHsgQXBwbGljYXRpb25Db25maWcsIHByb3ZpZGVab25lQ2hhbmdlRGV0ZWN0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwcm92aWRlUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9hcHAucm91dGVzJztcbmltcG9ydCB7IHByb3ZpZGVDbGllbnRIeWRyYXRpb24gfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuZXhwb3J0IGNvbnN0IGFwcENvbmZpZzogQXBwbGljYXRpb25Db25maWcgPSB7XG4gIHByb3ZpZGVyczogW3Byb3ZpZGVab25lQ2hhbmdlRGV0ZWN0aW9uKHsgZXZlbnRDb2FsZXNjaW5nOiB0cnVlIH0pLCBwcm92aWRlUm91dGVyKHJvdXRlcyksIHByb3ZpZGVDbGllbnRIeWRyYXRpb24oKV1cbn07XG4iLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5leHBvcnQgY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXTtcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyT3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IExpc3RlVGFjaGVzQ29tcG9uZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvbGlzdGUtdGFjaGVzLWNvbXBvbmVudC9saXN0ZS10YWNoZXMtY29tcG9uZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBam91dFRhY2hlc0NvbXBvbmVudENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L2Fqb3V0LXRhY2hlcy1jb21wb25lbnQvYWpvdXQtdGFjaGVzLWNvbXBvbmVudC5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1JvdXRlck91dGxldCwgTGlzdGVUYWNoZXNDb21wb25lbnRDb21wb25lbnQsQWpvdXRUYWNoZXNDb21wb25lbnRDb21wb25lbnRdLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2FwcC5jb21wb25lbnQuY3NzJ1xufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICB0aXRsZSA9ICdwcm9qZXQtNCc7XG59XG4iLCI8aDE+TGlzdGUgZGUgdGFjaGVzIHVwZ3JhZGU8L2gxPlxuPGFwcC1saXN0ZS10YWNoZXMtY29tcG9uZW50PjwvYXBwLWxpc3RlLXRhY2hlcy1jb21wb25lbnQ+XG48IS0tIDxhcHAtYWpvdXQtdGFjaGVzLWNvbXBvbmVudD48L2FwcC1ham91dC10YWNoZXMtY29tcG9uZW50PiAtLT4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRhY2hlQ29tcG9uZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vdGFjaGUtY29tcG9uZW50L3RhY2hlLWNvbXBvbmVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFza2xpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdGFza2xpc3Quc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWxpc3RlLXRhY2hlcy1jb21wb25lbnQnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBUYWNoZUNvbXBvbmVudENvbXBvbmVudF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0ZS10YWNoZXMtY29tcG9uZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2xpc3RlLXRhY2hlcy1jb21wb25lbnQuY29tcG9uZW50LmNzcydcbn0pXG5leHBvcnQgY2xhc3MgTGlzdGVUYWNoZXNDb21wb25lbnRDb21wb25lbnQge1xuICB0YWNoZXM6YW55ID0gW11cbiAgdGFjaGVTdXBwcmltZWU6YW55ID0gJydcbiAgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFza0xpc3RTZXJ2aWNlOiBUYXNrbGlzdFNlcnZpY2UpIHtcbiAgICB0aGlzLnRhY2hlcyA9IHRoaXMudGFza0xpc3RTZXJ2aWNlLmRpc3BsYXlUYXNrTGlzdCgpO1xuICB9XG5cbiAgcmVjZXZvaXJUYWNoZVN1cHByKGlkOmFueSkge1xuICAgIHRoaXMudGFjaGVzID0gdGhpcy50YXNrTGlzdFNlcnZpY2UucmVjZXZvaXJUYWNoZVN1cHByKGlkKTtcbiAgfVxuXG5cbn1cbiIsIjx1bD5cbiAgICA8YXBwLXRhY2hlLWNvbXBvbmVudCAodGFjaGVTdXBwcmltZWUpPVwicmVjZXZvaXJUYWNoZVN1cHByKCRldmVudClcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiB0YWNoZXM7IGxldCBpID0gaW5kZXhcIiBbaXRlbV09XCJpdGVtXCI+PC9hcHAtdGFjaGUtY29tcG9uZW50PlxuPC91bD4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGFza2xpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdGFza2xpc3Quc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC10YWNoZS1jb21wb25lbnQnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhY2hlLWNvbXBvbmVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi90YWNoZS1jb21wb25lbnQuY29tcG9uZW50LmNzcydcbn0pXG5leHBvcnQgY2xhc3MgVGFjaGVDb21wb25lbnRDb21wb25lbnQge1xuXG5cbiAgQElucHV0KCkgaXRlbTphbnk7XG5cbiAgXG4gIEBPdXRwdXQoKSB0YWNoZVN1cHByaW1lZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBcbiAgZGVsZXRlKCl7XG4gICAgdGhpcy50YWNoZVN1cHByaW1lZS5lbWl0KHRoaXMuaXRlbS5pZClcbiAgfVxufVxuIiwiXG48cCAoY2xpY2spPVwiZGVsZXRlKClcIj57e2l0ZW0ubm9tfX08L3A+IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUYXNrbGlzdFNlcnZpY2Uge1xuXG4gIG5vdXZlbGxlVGFjaGU6YW55ID0nJztcbiAgdGFjaGVzIDogeyBpZDpudW1iZXI7IG5vbTogc3RyaW5nOyBjb21wbGV0ZWQ6Ym9vbGVhbn1bXSA9IFtcbiAgICB7XG4gICAgICBpZDogMCwgbm9tOidWYWlzc2VsbGUnLCBjb21wbGV0ZWQ6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAxLCBub206J03DqW5hZ2UnLCBjb21wbGV0ZWQ6ZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLCBub206J0Fycm9zZXIgbGVzIHBsYW50ZXMnLCBjb21wbGV0ZWQ6ZmFsc2VcbiAgICB9XG4gIF1cbiAgY291bnRlcjpudW1iZXIgPSAwO1xuXG4gIGRpc3BsYXlUYXNrTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy50YWNoZXM7XG4gIH1cblxuICByZWNldm9pclRhY2hlU3VwcHIoaWQ6YW55KSB7XG4gICAgY29uc29sZS5sb2coaWQpXG4gICAgdGhpcy50YWNoZXMuc3BsaWNlKGlkLCAxKVxuICB9XG5cbiAgZ2V0Tm91dmVsbGVUYWNoZSh0YWNoZTphbnkpIHtcbiAgICBpZih0aGlzLm5vdXZlbGxlVGFjaGUpIHtcbiAgICByZXR1cm4gdGhpcy5ub3V2ZWxsZVRhY2hlID0gdGFjaGU7XG4gICAgfVxuICB9XG5cbiAgYWpvdXRUYWNoZSgpIHtcbiAgICB0aGlzLnRhY2hlcy5wdXNoKHRoaXMubm91dmVsbGVUYWNoZSk7XG4gICAgdGhpcy5ub3V2ZWxsZVRhY2hlID0nJztcbiAgfVxuXG4gIFxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUYXNrbGlzdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90YXNrbGlzdC5zZXJ2aWNlJztcbmltcG9ydCB7IExpc3RlVGFjaGVzQ29tcG9uZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vbGlzdGUtdGFjaGVzLWNvbXBvbmVudC9saXN0ZS10YWNoZXMtY29tcG9uZW50LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1ham91dC10YWNoZXMtY29tcG9uZW50JyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIExpc3RlVGFjaGVzQ29tcG9uZW50Q29tcG9uZW50XSxcbiAgdGVtcGxhdGVVcmw6ICcuL2Fqb3V0LXRhY2hlcy1jb21wb25lbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vYWpvdXQtdGFjaGVzLWNvbXBvbmVudC5jb21wb25lbnQuY3NzJ1xufSlcbmV4cG9ydCBjbGFzcyBBam91dFRhY2hlc0NvbXBvbmVudENvbXBvbmVudCB7XG4gIG5vdXZlbGxlVGFjaGU6YW55ID0nJ1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFza0xpc3RTZXJ2aWNlOiBUYXNrbGlzdFNlcnZpY2UpIHtcbiAgICB0aGlzLm5vdXZlbGxlVGFjaGUgPSB0aGlzLnRhc2tMaXN0U2VydmljZS5nZXROb3V2ZWxsZVRhY2hlKHRoaXMubm91dmVsbGVUYWNoZSk7XG4gIH1cblxufVxuIiwiPGgzPkFqb3V0ZXIgdW5lIHRhY2hlPC9oMz5cbjxpbnB1dCBbKG5nTW9kZWwpXT0nbm91dmVsbGVUYWNoZScgdHlwZT1cInRleHRcIj5cbjwhLS0gPGJ1dHRvbiAoY2xpY2spPVwiYWpvdXRUYWNoZSgkZXZlbnQpXCI+PC9idXR0b24+IC0tPlxuIl0sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyw0QkFBNEI7OztBQ0FyQyxTQUE0QixrQ0FBa0M7QUFDOUQsU0FBUyxxQkFBcUI7OztBQ0N2QixJQUFNLFNBQWlCLENBQUE7OztBREU5QixTQUFTLDhCQUE4QjtBQUVoQyxJQUFNLFlBQStCO0VBQzFDLFdBQVcsQ0FBQywyQkFBMkIsRUFBRSxpQkFBaUIsS0FBSSxDQUFFLEdBQUcsY0FBYyxNQUFNLEdBQUcsdUJBQXNCLENBQUU7Ozs7QUVQcEgsU0FBUyxhQUFBQSxrQkFBaUI7QUFDMUIsU0FBUyxvQkFBb0I7OztBRUQ3QixTQUFTLGFBQUFDLGtCQUE0QjtBQUNyQyxTQUFTLG9CQUFvQjs7O0FFRDdCLFNBQVMsV0FBVyxPQUFPLFFBQVEsb0JBQW9COztBQVVqRCxJQUFPLDBCQUFQLE1BQU8seUJBQXVCO0VBR3pCO0VBR0MsaUJBQWlCLElBQUksYUFBWTtFQUUzQyxTQUFNO0FBQ0osU0FBSyxlQUFlLEtBQUssS0FBSyxLQUFLLEVBQUU7RUFDdkM7O3FDQVZXLDBCQUF1QjtFQUFBOzRFQUF2QiwwQkFBdUIsV0FBQSxDQUFBLENBQUEscUJBQUEsQ0FBQSxHQUFBLFFBQUEsRUFBQSxNQUFBLE9BQUEsR0FBQSxTQUFBLEVBQUEsZ0JBQUEsaUJBQUEsR0FBQSxZQUFBLE1BQUEsVUFBQSxDQUFBLGdDQUFBLEdBQUEsT0FBQSxHQUFBLE1BQUEsR0FBQSxRQUFBLENBQUEsQ0FBQSxHQUFBLE9BQUEsQ0FBQSxHQUFBLFVBQUEsU0FBQSxpQ0FBQSxJQUFBLEtBQUE7QUFBQSxRQUFBLEtBQUEsR0FBQTtBQ1RwQyxNQUFBLDRCQUFBLEdBQUEsS0FBQSxDQUFBO0FBQUcsTUFB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aUIsS0FBSyxhQUFhO0VBQy9FOztxQ0FMVyxnQ0FBNkIsZ0NBQUEsZUFBQSxDQUFBO0VBQUE7NkVBQTdCLGdDQUE2QixXQUFBLENBQUEsQ0FBQSw0QkFBQSxDQUFBLEdBQUEsWUFBQSxNQUFBLFVBQUEsQ0FBQSxpQ0FBQSxHQUFBLE9BQUEsR0FBQSxNQUFBLEdBQUEsUUFBQSxDQUFBLENBQUEsUUFBQSxRQUFBLEdBQUEsaUJBQUEsU0FBQSxDQUFBLEdBQUEsVUFBQSxTQUFBLHVDQUFBLElBQUEsS0FBQTtBQUFBLFFBQUEsS0FBQSxHQUFBO0FDYjFDLE1BQUEsNkJBQUEsR0FBQSxJQUFBO0FBQUksTUFBQSxxQkFBQSxHQUFBLG1CQUFBO0FBQWlCLE1BQUEsMkJBQUE7QUFDckIsTUFBQSw2QkFBQSxHQUFBLFNBQUEsQ0FBQTtBQUFPLE1BQUEsK0JBQUEsaUJBQUEsU0FBQSxzRUFBQSxRQUFBO0FBQUEsUUFBQSxpQ0FBQSxJQUFBLGVBQUEsTUFBQSxNQUFBLElBQUEsZ0JBQUE7QUFBQSxlQUFBO01BQUEsQ0FBQTtBQUFQLE1BQUEsMkJBQUE7OztBQUFPLE1BQUEsd0JBQUEsQ0FBQTtBQUFBLE1BQUEsK0JBQUEsV0FBQSxJQUFBLGFBQUE7O29CRFFLQyxlQUFjLGFBQVcsMEJBQUEscUJBQUEsV0FBQSxFQUFBLENBQUE7OztpRkFJeEIsK0JBQTZCLEVBQUEsV0FBQSxnQ0FBQSxDQUFBO0FBQUEsR0FBQTs7OztBUEFwQyxJQUFPLGVBQVAsTUFBTyxjQUFZO0VBQ3ZCLFFBQVE7O3FDQURHLGVBQVk7RUFBQTs2RUFBWixlQUFZLFdBQUEsQ0FBQSxDQUFBLFVBQUEsQ0FBQSxHQUFBLFlBQUEsTUFBQSxVQUFBLENBQUEsaUNBQUEsR0FBQSxPQUFBLEdBQUEsTUFBQSxHQUFBLFVBQUEsU0FBQSxzQkFBQSxJQUFBLEtBQUE7QUFBQSxRQUFBLEtBQUEsR0FBQTtBQ2J6QixNQUFBLDZCQUFBLEdBQUEsSUFBQTtBQUFJLE1BQUEscUJBQUEsR0FBQSx5QkFBQTtBQUF1QixNQUFBLDJCQUFBO0FBQzNCLE1BQUEsd0JBQUEsR0FBQSw0QkFBQTs7b0JEUTBCLDZCQUE2QixFQUFBLENBQUE7OztpRkFJMUMsY0FBWSxFQUFBLFdBQUEsZUFBQSxDQUFBO0FBQUEsR0FBQTs7O0FIVHpCLHFCQUFxQixjQUFjLFNBQVMsRUFDekMsTUFBTSxDQUFDLFFBQVEsUUFBUSxNQUFNLEdBQUcsQ0FBQzsiLCJuYW1lcyI6WyJDb21wb25lbnQiLCJDb21wb25lbnQiLCJDb21wb25lbnQiLCJDb21tb25Nb2R1bGUiLCJDb21tb25Nb2R1bGUiXX0=