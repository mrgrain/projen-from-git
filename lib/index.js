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
            depsUpgradeOptions: {
                types: [projen_1.DependencyType.BUILD, projen_1.DependencyType.OPTIONAL, projen_1.DependencyType.RUNTIME],
            },
            deps: [
                ...options?.deps || [],
            ],
            devDeps: [
                ...options?.devDeps || [],
                'projen',
            ],
            peerDeps: [
                ...options?.peerDeps || [],
            ],
        });
        this.addPeerDeps('projen@>=0.90.0');
        this.gitignore.removePatterns('.jsii', '/lib');
        // This project isn't packaged, so we do nothing
        this.tasks.tryFind('package')?.reset();
    }
}
exports.ProjenProjectFromGit = ProjenProjectFromGit;
_a = JSII_RTTI_SYMBOL_1;
ProjenProjectFromGit[_a] = { fqn: "@mrgrain/projen-from-git.ProjenProjectFromGit", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBeUQ7QUFFekQsTUFBYSxvQkFBcUIsU0FBUSxZQUFHLENBQUMsV0FBVztJQUN2RCxZQUFtQixPQUErQjtRQUNoRCxLQUFLLENBQUM7WUFDSixVQUFVLEVBQUUsSUFBSTtZQUNoQixjQUFjLEVBQUUsbUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHO1lBQ2pELHFCQUFxQixFQUFFO2dCQUNyQixtQkFBbUIsRUFBRSxLQUFLO2FBQzNCO1lBQ0QsV0FBVyxFQUFFLFNBQVM7WUFDdEIsY0FBYyxFQUFFLFNBQVM7WUFDekIsY0FBYyxFQUFFLFNBQVM7WUFDekIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsWUFBWSxFQUFFLEtBQUs7WUFDbkIsR0FBRyxPQUFPO1lBQ1Ysa0JBQWtCLEVBQUU7Z0JBQ2xCLEtBQUssRUFBRSxDQUFDLHVCQUFjLENBQUMsS0FBSyxFQUFFLHVCQUFjLENBQUMsUUFBUSxFQUFFLHVCQUFjLENBQUMsT0FBTyxDQUFDO2FBQy9FO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLEdBQUcsT0FBTyxFQUFFLElBQUksSUFBSSxFQUFFO2FBQ3ZCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLEdBQUcsT0FBTyxFQUFFLE9BQU8sSUFBSSxFQUFFO2dCQUN6QixRQUFRO2FBQ1Q7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsR0FBRyxPQUFPLEVBQUUsUUFBUSxJQUFJLEVBQUU7YUFDM0I7U0FDRixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRS9DLGdEQUFnRDtRQUNoRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUN6QyxDQUFDOztBQW5DSCxvREFvQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjZGssIERlcGVuZGVuY3lUeXBlLCBqYXZhc2NyaXB0IH0gZnJvbSAncHJvamVuJztcblxuZXhwb3J0IGNsYXNzIFByb2plblByb2plY3RGcm9tR2l0IGV4dGVuZHMgY2RrLkpzaWlQcm9qZWN0IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKG9wdGlvbnM6IGNkay5Kc2lpUHJvamVjdE9wdGlvbnMpIHtcbiAgICBzdXBlcih7XG4gICAgICBwcm9qZW5yY1RzOiB0cnVlLFxuICAgICAgcGFja2FnZU1hbmFnZXI6IGphdmFzY3JpcHQuTm9kZVBhY2thZ2VNYW5hZ2VyLk5QTSxcbiAgICAgIHBlZXJEZXBlbmRlbmN5T3B0aW9uczoge1xuICAgICAgICBwaW5uZWREZXZEZXBlbmRlbmN5OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBwdWJsaXNoVG9HbzogdW5kZWZpbmVkLFxuICAgICAgcHVibGlzaFRvTWF2ZW46IHVuZGVmaW5lZCxcbiAgICAgIHB1Ymxpc2hUb051Z2V0OiB1bmRlZmluZWQsXG4gICAgICBwdWJsaXNoVG9QeXBpOiB1bmRlZmluZWQsXG4gICAgICByZWxlYXNlVG9OcG06IGZhbHNlLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIGRlcHNVcGdyYWRlT3B0aW9uczoge1xuICAgICAgICB0eXBlczogW0RlcGVuZGVuY3lUeXBlLkJVSUxELCBEZXBlbmRlbmN5VHlwZS5PUFRJT05BTCwgRGVwZW5kZW5jeVR5cGUuUlVOVElNRV0sXG4gICAgICB9LFxuICAgICAgZGVwczogW1xuICAgICAgICAuLi5vcHRpb25zPy5kZXBzIHx8IFtdLFxuICAgICAgXSxcbiAgICAgIGRldkRlcHM6IFtcbiAgICAgICAgLi4ub3B0aW9ucz8uZGV2RGVwcyB8fCBbXSxcbiAgICAgICAgJ3Byb2plbicsXG4gICAgICBdLFxuICAgICAgcGVlckRlcHM6IFtcbiAgICAgICAgLi4ub3B0aW9ucz8ucGVlckRlcHMgfHwgW10sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRQZWVyRGVwcygncHJvamVuQD49MC45MC4wJyk7XG5cbiAgICB0aGlzLmdpdGlnbm9yZS5yZW1vdmVQYXR0ZXJucygnLmpzaWknLCAnL2xpYicpO1xuXG4gICAgLy8gVGhpcyBwcm9qZWN0IGlzbid0IHBhY2thZ2VkLCBzbyB3ZSBkbyBub3RoaW5nXG4gICAgdGhpcy50YXNrcy50cnlGaW5kKCdwYWNrYWdlJyk/LnJlc2V0KCk7XG4gIH1cbn1cbiJdfQ==