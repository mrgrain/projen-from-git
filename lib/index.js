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
        this.addPeerDeps('constructs@^10.0.0', 'projen@>=0.90.0');
        this.gitignore.removePatterns('.jsii', '/lib');
        // This project isn't packaged, so we do nothing
        this.tasks.tryFind('package')?.reset();
        // Custom samples
        this.removeDefaultSamples();
        this.sampleCode();
    }
    /**
     * Setup sample code for new projects
     *
     * Override this method to implement custom samples.
     */
    sampleCode() {
        new projen_1.SampleDir(this, this.srcdir, {
            files: {
                'index.ts': [
                    'import * as projen from \'projen\';',
                    '',
                    'export class MyProject extends projen.Project {',
                    '  // add your code here',
                    '}',
                    '',
                ].join('\n'),
            },
        });
        if (this.jest) {
            new projen_1.SampleDir(this, this.testdir, {
                files: {
                    'project.test.ts': [
                        "import { MyProject } from '../src';",
                        '',
                        "test('MyProject synthesizes without error', () => {",
                        '  const project = new MyProject({',
                        '    name: \'test-project\',',
                        '  });',
                        '  expect(() => project.synth()).not.toThrow();',
                        '});',
                        '',
                    ].join('\n'),
                },
            });
        }
    }
    /**
     * Remove the default samples from the project
     */
    removeDefaultSamples() {
        const samples = this.node.children.filter(component => component instanceof projen_1.SampleDir);
        for (const sample of samples) {
            this.node.tryRemoveChild(sample.node.id);
        }
    }
}
exports.ProjenProjectFromGit = ProjenProjectFromGit;
_a = JSII_RTTI_SYMBOL_1;
ProjenProjectFromGit[_a] = { fqn: "@mrgrain/projen-from-git.ProjenProjectFromGit", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBb0U7QUFFcEUsTUFBYSxvQkFBcUIsU0FBUSxZQUFHLENBQUMsV0FBVztJQUN2RCxZQUFtQixPQUErQjtRQUNoRCxLQUFLLENBQUM7WUFDSixVQUFVLEVBQUUsSUFBSTtZQUNoQixjQUFjLEVBQUUsbUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHO1lBQ2pELHFCQUFxQixFQUFFO2dCQUNyQixtQkFBbUIsRUFBRSxLQUFLO2FBQzNCO1lBQ0QsV0FBVyxFQUFFLFNBQVM7WUFDdEIsY0FBYyxFQUFFLFNBQVM7WUFDekIsY0FBYyxFQUFFLFNBQVM7WUFDekIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsWUFBWSxFQUFFLEtBQUs7WUFDbkIsR0FBRyxPQUFPO1lBQ1Ysa0JBQWtCLEVBQUU7Z0JBQ2xCLEtBQUssRUFBRSxDQUFDLHVCQUFjLENBQUMsS0FBSyxFQUFFLHVCQUFjLENBQUMsUUFBUSxFQUFFLHVCQUFjLENBQUMsT0FBTyxDQUFDO2FBQy9FO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLEdBQUcsT0FBTyxFQUFFLElBQUksSUFBSSxFQUFFO2FBQ3ZCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLEdBQUcsT0FBTyxFQUFFLE9BQU8sSUFBSSxFQUFFO2dCQUN6QixRQUFRO2FBQ1Q7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsR0FBRyxPQUFPLEVBQUUsUUFBUSxJQUFJLEVBQUU7YUFDM0I7U0FDRixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFFMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRS9DLGdEQUFnRDtRQUNoRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUV2QyxpQkFBaUI7UUFDakIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7OztPQUlHO0lBQ08sVUFBVTtRQUNsQixJQUFJLGtCQUFTLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDL0IsS0FBSyxFQUFFO2dCQUNMLFVBQVUsRUFBRTtvQkFDVixxQ0FBcUM7b0JBQ3JDLEVBQUU7b0JBQ0YsaURBQWlEO29CQUNqRCx5QkFBeUI7b0JBQ3pCLEdBQUc7b0JBQ0gsRUFBRTtpQkFDSCxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDYjtTQUNGLENBQUMsQ0FBQztRQUVILElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2QsSUFBSSxrQkFBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNoQyxLQUFLLEVBQUU7b0JBQ0wsaUJBQWlCLEVBQUU7d0JBQ2pCLHFDQUFxQzt3QkFDckMsRUFBRTt3QkFDRixxREFBcUQ7d0JBQ3JELG1DQUFtQzt3QkFDbkMsNkJBQTZCO3dCQUM3QixPQUFPO3dCQUNQLGdEQUFnRDt3QkFDaEQsS0FBSzt3QkFDTCxFQUFFO3FCQUNILENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztpQkFDYjthQUNGLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSyxvQkFBb0I7UUFDMUIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxZQUFZLGtCQUFTLENBQUMsQ0FBQztRQUN2RixLQUFLLE1BQU0sTUFBTSxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0MsQ0FBQztJQUNILENBQUM7O0FBdkZILG9EQXdGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNkaywgRGVwZW5kZW5jeVR5cGUsIGphdmFzY3JpcHQsIFNhbXBsZURpciB9IGZyb20gJ3Byb2plbic7XG5cbmV4cG9ydCBjbGFzcyBQcm9qZW5Qcm9qZWN0RnJvbUdpdCBleHRlbmRzIGNkay5Kc2lpUHJvamVjdCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihvcHRpb25zOiBjZGsuSnNpaVByb2plY3RPcHRpb25zKSB7XG4gICAgc3VwZXIoe1xuICAgICAgcHJvamVucmNUczogdHJ1ZSxcbiAgICAgIHBhY2thZ2VNYW5hZ2VyOiBqYXZhc2NyaXB0Lk5vZGVQYWNrYWdlTWFuYWdlci5OUE0sXG4gICAgICBwZWVyRGVwZW5kZW5jeU9wdGlvbnM6IHtcbiAgICAgICAgcGlubmVkRGV2RGVwZW5kZW5jeTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgcHVibGlzaFRvR286IHVuZGVmaW5lZCxcbiAgICAgIHB1Ymxpc2hUb01hdmVuOiB1bmRlZmluZWQsXG4gICAgICBwdWJsaXNoVG9OdWdldDogdW5kZWZpbmVkLFxuICAgICAgcHVibGlzaFRvUHlwaTogdW5kZWZpbmVkLFxuICAgICAgcmVsZWFzZVRvTnBtOiBmYWxzZSxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBkZXBzVXBncmFkZU9wdGlvbnM6IHtcbiAgICAgICAgdHlwZXM6IFtEZXBlbmRlbmN5VHlwZS5CVUlMRCwgRGVwZW5kZW5jeVR5cGUuT1BUSU9OQUwsIERlcGVuZGVuY3lUeXBlLlJVTlRJTUVdLFxuICAgICAgfSxcbiAgICAgIGRlcHM6IFtcbiAgICAgICAgLi4ub3B0aW9ucz8uZGVwcyB8fCBbXSxcbiAgICAgIF0sXG4gICAgICBkZXZEZXBzOiBbXG4gICAgICAgIC4uLm9wdGlvbnM/LmRldkRlcHMgfHwgW10sXG4gICAgICAgICdwcm9qZW4nLFxuICAgICAgXSxcbiAgICAgIHBlZXJEZXBzOiBbXG4gICAgICAgIC4uLm9wdGlvbnM/LnBlZXJEZXBzIHx8IFtdLFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkUGVlckRlcHMoJ2NvbnN0cnVjdHNAXjEwLjAuMCcsICdwcm9qZW5APj0wLjkwLjAnKTtcblxuICAgIHRoaXMuZ2l0aWdub3JlLnJlbW92ZVBhdHRlcm5zKCcuanNpaScsICcvbGliJyk7XG5cbiAgICAvLyBUaGlzIHByb2plY3QgaXNuJ3QgcGFja2FnZWQsIHNvIHdlIGRvIG5vdGhpbmdcbiAgICB0aGlzLnRhc2tzLnRyeUZpbmQoJ3BhY2thZ2UnKT8ucmVzZXQoKTtcblxuICAgIC8vIEN1c3RvbSBzYW1wbGVzXG4gICAgdGhpcy5yZW1vdmVEZWZhdWx0U2FtcGxlcygpO1xuICAgIHRoaXMuc2FtcGxlQ29kZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHVwIHNhbXBsZSBjb2RlIGZvciBuZXcgcHJvamVjdHNcbiAgICpcbiAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gaW1wbGVtZW50IGN1c3RvbSBzYW1wbGVzLlxuICAgKi9cbiAgcHJvdGVjdGVkIHNhbXBsZUNvZGUoKSB7XG4gICAgbmV3IFNhbXBsZURpcih0aGlzLCB0aGlzLnNyY2Rpciwge1xuICAgICAgZmlsZXM6IHtcbiAgICAgICAgJ2luZGV4LnRzJzogW1xuICAgICAgICAgICdpbXBvcnQgKiBhcyBwcm9qZW4gZnJvbSBcXCdwcm9qZW5cXCc7JyxcbiAgICAgICAgICAnJyxcbiAgICAgICAgICAnZXhwb3J0IGNsYXNzIE15UHJvamVjdCBleHRlbmRzIHByb2plbi5Qcm9qZWN0IHsnLFxuICAgICAgICAgICcgIC8vIGFkZCB5b3VyIGNvZGUgaGVyZScsXG4gICAgICAgICAgJ30nLFxuICAgICAgICAgICcnLFxuICAgICAgICBdLmpvaW4oJ1xcbicpLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmplc3QpIHtcbiAgICAgIG5ldyBTYW1wbGVEaXIodGhpcywgdGhpcy50ZXN0ZGlyLCB7XG4gICAgICAgIGZpbGVzOiB7XG4gICAgICAgICAgJ3Byb2plY3QudGVzdC50cyc6IFtcbiAgICAgICAgICAgIFwiaW1wb3J0IHsgTXlQcm9qZWN0IH0gZnJvbSAnLi4vc3JjJztcIixcbiAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgXCJ0ZXN0KCdNeVByb2plY3Qgc3ludGhlc2l6ZXMgd2l0aG91dCBlcnJvcicsICgpID0+IHtcIixcbiAgICAgICAgICAgICcgIGNvbnN0IHByb2plY3QgPSBuZXcgTXlQcm9qZWN0KHsnLFxuICAgICAgICAgICAgJyAgICBuYW1lOiBcXCd0ZXN0LXByb2plY3RcXCcsJyxcbiAgICAgICAgICAgICcgIH0pOycsXG4gICAgICAgICAgICAnICBleHBlY3QoKCkgPT4gcHJvamVjdC5zeW50aCgpKS5ub3QudG9UaHJvdygpOycsXG4gICAgICAgICAgICAnfSk7JyxcbiAgICAgICAgICAgICcnLFxuICAgICAgICAgIF0uam9pbignXFxuJyksXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBkZWZhdWx0IHNhbXBsZXMgZnJvbSB0aGUgcHJvamVjdFxuICAgKi9cbiAgcHJpdmF0ZSByZW1vdmVEZWZhdWx0U2FtcGxlcygpIHtcbiAgICBjb25zdCBzYW1wbGVzID0gdGhpcy5ub2RlLmNoaWxkcmVuLmZpbHRlcihjb21wb25lbnQgPT4gY29tcG9uZW50IGluc3RhbmNlb2YgU2FtcGxlRGlyKTtcbiAgICBmb3IgKGNvbnN0IHNhbXBsZSBvZiBzYW1wbGVzKSB7XG4gICAgICB0aGlzLm5vZGUudHJ5UmVtb3ZlQ2hpbGQoc2FtcGxlLm5vZGUuaWQpO1xuICAgIH1cbiAgfVxufVxuIl19