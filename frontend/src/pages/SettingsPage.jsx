import { useThemeStore } from "../store/useThemeStore.js";
import { Send, Sun, Moon, Palette } from "lucide-react";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", isSent: false },
  { id: 2, content: "I'm doing great! Just working on some new features.", isSent: true },
];

const THEMES = [
  { 
    name: 'light', 
    title: 'Light Mode', 
    description: 'Clean and bright interface',
    icon: Sun
  },
  { 
    name: 'dark', 
    title: 'Dark Mode', 
    description: 'Easy on the eyes',
    icon: Moon
  }
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className='h-screen pt-20'>
      <div className='max-w-2xl mx-auto p-4 py-8'>
        <div className='bg-base-300 rounded-xl p-6 space-y-8'>
          <div className="text-center">
            <h1 className="text-2xl font-semibold">Settings</h1>
            <p className="mt-2">Customize your chat experience</p>
          </div>

          {/* Theme Selection Section */}
          <div className="space-y-6">
            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <Palette className="w-4 h-4" />
                Theme Preference
              </div>
              <div className="space-y-3">
                {THEMES.map((t) => {
                  const IconComponent = t.icon;
                  const isActive = theme === t.name;
                  
                  return (
                    <button
                      key={t.name}
                      onClick={() => setTheme(t.name)}
                      className={`
                        w-full px-4 py-3 bg-base-200 rounded-lg border text-left transition-all duration-200
                        ${isActive 
                          ? "border-primary ring-2 ring-primary/20 bg-primary/5" 
                          : "border-base-300 hover:border-primary/50"
                        }
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`
                          p-2 rounded-lg 
                          ${isActive ? "bg-primary text-primary-content" : "bg-base-300"}
                        `}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{t.title}</div>
                          <div className="text-sm text-zinc-400">{t.description}</div>
                        </div>
                        {isActive && (
                          <div className="w-3 h-3 bg-primary rounded-full"></div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Preview Section */}
          <div className="mt-6 bg-base-300 rounded-xl p-6">
            <h2 className="text-lg font-medium mb-4">Preview</h2>
            <div className="bg-base-100 rounded-xl overflow-hidden border border-base-300">
              {/* Chat Header */}
              <div className="px-4 py-3 bg-base-100 border-b border-base-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content font-medium text-sm">
                    J
                  </div>
                  <div>
                    <div className="font-medium text-sm">John Doe</div>
                    <div className="text-xs text-zinc-400">Online</div>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="p-4 space-y-3 bg-base-100" style={{ height: '200px' }}>
                {PREVIEW_MESSAGES.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`
                        max-w-[80%] rounded-xl px-3 py-2 text-sm
                        ${message.isSent 
                          ? "bg-primary text-primary-content" 
                          : "bg-base-200"
                        }
                      `}
                    >
                      <div>{message.content}</div>
                      <div
                        className={`
                          text-xs mt-1 
                          ${message.isSent ? "text-primary-content/70" : "text-zinc-400"}
                        `}
                      >
                        12:0{message.id} PM
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="p-4 bg-base-100 border-t border-base-300">
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="input input-bordered flex-1 text-sm h-10"
                    placeholder="Type a message..."
                    value="This is a preview"
                    readOnly
                  />
                  <button className="btn btn-primary h-10 min-h-0">
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Account Information Style Section */}
          <div className="mt-6 bg-base-300 rounded-xl p-6">
            <h2 className="text-lg font-medium mb-4">App Information</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                <span>Current Theme</span>
                <span className="capitalize">{theme}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                <span>App Version</span>
                <span>v1.0.0</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span>Last Updated</span>
                <span className="text-green-500">Today</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;