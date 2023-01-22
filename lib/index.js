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
                'projen@^x.x.x',
            ],
        });
        this.deps.removeDependency('typescript');
        this.addDevDeps('typescript@^3.9.0');
        this.gitignore.removePatterns('.jsii', '/lib');
    }
}
exports.ProjenProjectFromGit = ProjenProjectFromGit;
_a = JSII_RTTI_SYMBOL_1;
ProjenProjectFromGit[_a] = { fqn: "@mrgrain/projen-from-git.ProjenProjectFromGit", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBeUM7QUFFekMsTUFBYSxvQkFBcUIsU0FBUSxZQUFHLENBQUMsV0FBVztJQUN2RCxZQUFtQixPQUErQjtRQUNoRCxLQUFLLENBQUM7WUFDSixVQUFVLEVBQUUsSUFBSTtZQUNoQixjQUFjLEVBQUUsbUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHO1lBQ2pELHFCQUFxQixFQUFFO2dCQUNyQixtQkFBbUIsRUFBRSxLQUFLO2FBQzNCO1lBQ0QsV0FBVyxFQUFFLFNBQVM7WUFDdEIsY0FBYyxFQUFFLFNBQVM7WUFDekIsY0FBYyxFQUFFLFNBQVM7WUFDekIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsWUFBWSxFQUFFLEtBQUs7WUFDbkIsR0FBRyxPQUFPO1lBQ1YsSUFBSSxFQUFFO2dCQUNKLEdBQUcsT0FBTyxFQUFFLElBQUksSUFBSSxFQUFFO2FBQ3ZCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLEdBQUcsT0FBTyxFQUFFLE9BQU8sSUFBSSxFQUFFO2dCQUN6QixRQUFRO2FBQ1Q7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsR0FBRyxPQUFPLEVBQUUsUUFBUSxJQUFJLEVBQUU7Z0JBQzFCLGVBQWU7YUFDaEI7U0FDRixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7QUEvQkgsb0RBZ0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2RrLCBqYXZhc2NyaXB0IH0gZnJvbSAncHJvamVuJztcblxuZXhwb3J0IGNsYXNzIFByb2plblByb2plY3RGcm9tR2l0IGV4dGVuZHMgY2RrLkpzaWlQcm9qZWN0IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKG9wdGlvbnM6IGNkay5Kc2lpUHJvamVjdE9wdGlvbnMpIHtcbiAgICBzdXBlcih7XG4gICAgICBwcm9qZW5yY1RzOiB0cnVlLFxuICAgICAgcGFja2FnZU1hbmFnZXI6IGphdmFzY3JpcHQuTm9kZVBhY2thZ2VNYW5hZ2VyLk5QTSxcbiAgICAgIHBlZXJEZXBlbmRlbmN5T3B0aW9uczoge1xuICAgICAgICBwaW5uZWREZXZEZXBlbmRlbmN5OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBwdWJsaXNoVG9HbzogdW5kZWZpbmVkLFxuICAgICAgcHVibGlzaFRvTWF2ZW46IHVuZGVmaW5lZCxcbiAgICAgIHB1Ymxpc2hUb051Z2V0OiB1bmRlZmluZWQsXG4gICAgICBwdWJsaXNoVG9QeXBpOiB1bmRlZmluZWQsXG4gICAgICByZWxlYXNlVG9OcG06IGZhbHNlLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIGRlcHM6IFtcbiAgICAgICAgLi4ub3B0aW9ucz8uZGVwcyB8fCBbXSxcbiAgICAgIF0sXG4gICAgICBkZXZEZXBzOiBbXG4gICAgICAgIC4uLm9wdGlvbnM/LmRldkRlcHMgfHwgW10sXG4gICAgICAgICdwcm9qZW4nLFxuICAgICAgXSxcbiAgICAgIHBlZXJEZXBzOiBbXG4gICAgICAgIC4uLm9wdGlvbnM/LnBlZXJEZXBzIHx8IFtdLFxuICAgICAgICAncHJvamVuQF54LngueCcsXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgdGhpcy5kZXBzLnJlbW92ZURlcGVuZGVuY3koJ3R5cGVzY3JpcHQnKTtcbiAgICB0aGlzLmFkZERldkRlcHMoJ3R5cGVzY3JpcHRAXjMuOS4wJyk7XG5cbiAgICB0aGlzLmdpdGlnbm9yZS5yZW1vdmVQYXR0ZXJucygnLmpzaWknLCAnL2xpYicpO1xuICB9XG59Il19