module REPLcmds

using REPL, REPL.TerminalMenus

using DataToolkitBase
using Dates
using Markdown
using TOML
using UUIDs

import DataToolkitBase: REPL_CMDS, ReplCmd, completions, allcompletions,
    prompt, prompt_char, confirm_yn, peelword, displaytable, natkeygen,
    REPL_QUESTION_COLOR, REPL_USER_INPUT_COLOUR
import ..show_extra

include("utils.jl")

include("init.jl")
include("stack.jl")
include("plugins.jl")
include("config.jl")
include("add.jl")
include("remove.jl")
include("list.jl")
include("show.jl")
include("search.jl")
include("lint.jl")
include("make.jl")
include("edit.jl")

function add_repl_cmds()
    new_cmds = [
        ReplCmd(:add, ADD_DOC, add),
        ReplCmd(:init, INIT_DOC, init),
        ReplCmd(:config,
                "Inspect and modify the current configuration",
                CONFIG_SUBCOMMANDS),
        ReplCmd(:check,
                CHECK_DOC,
                repl_lint),
        ReplCmd(:edit,
                EDIT_DOC,
                repl_edit),
        ReplCmd(:list,
                LIST_DOC,
                repl_list),
        ReplCmd(:make,
                MAKE_DOC,
                repl_make),
        ReplCmd(:plugin,
                "Inspect and modify the set of plugins used",
                PLUGIN_SUBCOMMANDS),
        ReplCmd(:remove, REMOVE_DOC, remove),
        ReplCmd(:search,
                SEARCH_DOC,
                search),
        ReplCmd(:show,
                SHOW_DOC,
                repl_show),
        ReplCmd(:stack,
                "Operate on the data collection stack",
                STACK_SUBCOMMANDS)]
    for cmd in new_cmds
        pos = searchsorted(REPL_CMDS, cmd, by=c -> DataToolkitBase.natkeygen(c.trigger))
        splice!(REPL_CMDS, pos, (cmd,))
    end
end

end
