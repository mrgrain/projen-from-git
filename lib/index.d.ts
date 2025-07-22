import { cdk } from 'projen';
export declare class ProjenProjectFromGit extends cdk.JsiiProject {
    constructor(options: cdk.JsiiProjectOptions);
    /**
     * Setup sample code for new projects
     *
     * Override this method to implement custom samples.
     */
    protected sampleCode(): void;
    /**
     * Remove the default samples from the project
     */
    private removeDefaultSamples;
}
