export interface AgentModelPrefs {
  model?: string;
  reasoning?: string;
}

export type AgentCliEnvPrefs = Record<string, Record<string, string>>;

export type AppConfigExecMode = 'daemon' | 'api';
export type AppConfigApiProtocol = 'anthropic' | 'openai' | 'azure' | 'google' | 'ollama' | 'senseaudio';

export interface AppConfigApiProtocolPrefs {
  apiKey?: string;
  baseUrl?: string;
  model?: string;
  apiVersion?: string;
  apiProviderBaseUrl?: string | null;
  byokImageModel?: string;
}

export interface TelemetryPrefs {
  metrics?: boolean;
  content?: boolean;
  artifactManifest?: boolean;
}

export interface OrbitConfigPrefs {
  enabled: boolean;
  /** Local 24-hour clock time in HH:mm format. Defaults to 08:00. */
  time: string;
  /** Optional skill id from the examples gallery where scenario === "orbit". */
  templateSkillId?: string | null;
}

export interface AppConfigPrefs {
  mode?: AppConfigExecMode;
  apiKey?: string;
  baseUrl?: string;
  model?: string;
  apiProtocol?: AppConfigApiProtocol;
  apiVersion?: string;
  apiProviderBaseUrl?: string | null;
  byokImageModel?: string;
  apiProtocolConfigs?: Partial<Record<AppConfigApiProtocol, AppConfigApiProtocolPrefs>>;
  onboardingCompleted?: boolean;
  agentId?: string | null;
  agentModels?: Record<string, AgentModelPrefs>;
  agentCliEnv?: AgentCliEnvPrefs;
  skillId?: string | null;
  designSystemId?: string | null;
  disabledSkills?: string[];
  disabledDesignSystems?: string[];
  installationId?: string | null;
  telemetry?: TelemetryPrefs;
  /**
   * Unix-millis timestamp of when the user resolved the first-run privacy
   * consent surface (Share or Decline). Set on first decision and on
   * subsequent toggles in Settings → Privacy. Independent of
   * installationId so that "Delete my data" can rotate the id without
   * re-popping the consent banner.
   */
  privacyDecisionAt?: number | null;
  orbit?: OrbitConfigPrefs;
  customInstructions?: string | null;
}

export interface AppConfigResponse {
  config: AppConfigPrefs;
}

export type UpdateAppConfigRequest = Partial<AppConfigPrefs>;
