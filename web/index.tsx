import { registerWidget, type WidgetContext } from "@togo-framework/widget";

interface Tool { name: string; fav?: boolean }
export function Tools({ settings }: WidgetContext) {
  const tools = (settings.tools as Tool[]) ?? [{ name: "VS Code", fav: true }, { name: "Docker" }, { name: "Figma" }];
  return (
    <div className="wx-tools" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(90px,1fr))", gap: 8 }}>
      {tools.map((t) => (
        <div key={t.name} style={{ padding: 10, borderRadius: 8, background: "rgba(127,127,127,.1)", textAlign: "center", fontSize: 13 }}>
          {t.fav ? "* " : ""}{t.name}
        </div>
      ))}
    </div>
  );
}
registerWidget({ key: "tools", title: "Tools", defaultZone: "body", Comp: Tools });
