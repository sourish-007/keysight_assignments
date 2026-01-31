import { NgModule } from '@angular/core';
import { AppModule } from './app-module';
import { App } from './app';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { serverRoutes } from './app.routes.server';

@NgModule({
  imports: [AppModule],
  providers: [
    provideServerRendering(withRoutes(serverRoutes))
  ],
  bootstrap: [App]
})
export class AppServerModule {}
