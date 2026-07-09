// Package widgettools is the "Tools" DRIVER — The tools/stack in use, favourites starred.
//
// It self-registers into the widget base plugin on import. Install by blank-import:
//
//	import _ "github.com/togo-framework/widget-tools"
package widgettools

import "github.com/togo-framework/widget"

func init() {
	widget.Register(widget.Descriptor{
		Key:         "tools",
		Title:       "Tools",
		DefaultZone: "body",
		Asset:       "/widgets/tools.js",
	})
}
