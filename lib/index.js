"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjenProjectFromGit = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
class ProjenProjectFromGit extends projen_1.cdk.JsiiProject {
    constructor(options) {
        super({
            projenrcTs: true,
            packageManager: projen_1.javascript.NodePackageManager.NPM,
            peerDependencyOptions: {
                pinnedDevDependency: false,
            },
            publishToGo: undefined,
            publishToMaven: undefined,
            publishToNuget: undefined,
            publishToPypi: undefined,
            releaseToNpm: false,
            ...options,
            deps: [
                ...options?.deps || [],
            ],
            devDeps: [
                ...options?.devDeps || [],
                'projen',
            ],
            peerDeps: [
                ...options?.peerDeps || [],
                'projen@^0.90.0',
            ],
        });
        this.gitignore.removePatterns('.jsii', '/lib');
    }
}
exports.ProjenProjectFromGit = ProjenProjectFromGit;
_a = JSII_RTTI_SYMBOL_1;
ProjenProjectFromGit[_a] = { fqn: "@mrgrain/projen-from-git.ProjenProjectFromGit", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBeUM7QUFFekMsTUFBYSxvQkFBcUIsU0FBUSxZQUFHLENBQUMsV0FBVztJQUN2RCxZQUFtQixPQUErQjtRQUNoRCxLQUFLLENBQUM7WUFDSixVQUFVLEVBQUUsSUFBSTtZQUNoQixjQUFjLEVBQUUsbUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHO1lBQ2pELHFCQUFxQixFQUFFO2dCQUNyQixtQkFBbUIsRUFBRSxLQUFLO2FBQzNCO1lBQ0QsV0FBVyxFQUFFLFNBQVM7WUFDdEIsY0FBYyxFQUFFLFNBQVM7WUFDekIsY0FBYyxFQUFFLFNBQVM7WUFDekIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsWUFBWSxFQUFFLEtBQUs7WUFDbkIsR0FBRyxPQUFPO1lBQ1YsSUFBSSxFQUFFO2dCQUNKLEdBQUcsT0FBTyxFQUFFLElBQUksSUFBSSxFQUFFO2FBQ3ZCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLEdBQUcsT0FBTyxFQUFFLE9BQU8sSUFBSSxFQUFFO2dCQUN6QixRQUFRO2FBQ1Q7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsR0FBRyxPQUFPLEVBQUUsUUFBUSxJQUFJLEVBQUU7Z0JBQzFCLGdCQUFnQjthQUNqQjtTQUNGLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDOztBQTVCSCxvREE2QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjZGssIGphdmFzY3JpcHQgfSBmcm9tICdwcm9qZW4nO1xuXG5leHBvcnQgY2xhc3MgUHJvamVuUHJvamVjdEZyb21HaXQgZXh0ZW5kcyBjZGsuSnNpaVByb2plY3Qge1xuICBwdWJsaWMgY29uc3RydWN0b3Iob3B0aW9uczogY2RrLkpzaWlQcm9qZWN0T3B0aW9ucykge1xuICAgIHN1cGVyKHtcbiAgICAgIHByb2plbnJjVHM6IHRydWUsXG4gICAgICBwYWNrYWdlTWFuYWdlcjogamF2YXNjcmlwdC5Ob2RlUGFja2FnZU1hbmFnZXIuTlBNLFxuICAgICAgcGVlckRlcGVuZGVuY3lPcHRpb25zOiB7XG4gICAgICAgIHBpbm5lZERldkRlcGVuZGVuY3k6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHB1Ymxpc2hUb0dvOiB1bmRlZmluZWQsXG4gICAgICBwdWJsaXNoVG9NYXZlbjogdW5kZWZpbmVkLFxuICAgICAgcHVibGlzaFRvTnVnZXQ6IHVuZGVmaW5lZCxcbiAgICAgIHB1Ymxpc2hUb1B5cGk6IHVuZGVmaW5lZCxcbiAgICAgIHJlbGVhc2VUb05wbTogZmFsc2UsXG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgZGVwczogW1xuICAgICAgICAuLi5vcHRpb25zPy5kZXBzIHx8IFtdLFxuICAgICAgXSxcbiAgICAgIGRldkRlcHM6IFtcbiAgICAgICAgLi4ub3B0aW9ucz8uZGV2RGVwcyB8fCBbXSxcbiAgICAgICAgJ3Byb2plbicsXG4gICAgICBdLFxuICAgICAgcGVlckRlcHM6IFtcbiAgICAgICAgLi4ub3B0aW9ucz8ucGVlckRlcHMgfHwgW10sXG4gICAgICAgICdwcm9qZW5AXjAuOTAuMCcsXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgdGhpcy5naXRpZ25vcmUucmVtb3ZlUGF0dGVybnMoJy5qc2lpJywgJy9saWInKTtcbiAgfVxufSJdfQ==