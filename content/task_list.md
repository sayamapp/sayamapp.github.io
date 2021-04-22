+++
sort_by = "date"
+++


* todo
** contents
- github.io
- aclate
- dairy-memo
** structure
*** section
- index
- repository
- memo
    - memo.md
        - date, template, tag, title
        - content

- ac_lt_bevy
** scripts
*** contributon
- contribution.js
*** graphes
- graphes1
    - acrate_graph.js
    - lt_profit.js
*** updat_repository
- gitgraph.js
    - graph-dotsize
    - graph-lensize
** heroku(ver1.0)
- generate json
    - contribute.json
    - ac1.json
    - lt1.json
    - commit_graph.json
TODO: ここのjsonをまとめる
fig:
{
    contribute: [
        {
            count: int,
            date: String,
        },
    ],
    ac1: [
        {...}
    ],
    lt1: [
        {
            date: String,
            data: int,
        },
    ],
    gitgraph: [
        {
            command: Command,
            text: String,
        },
    ],
}
    
** scss
    - myStyles
        - default.scss
        - mobile.scss

** codes
*** contributes 
fn generate_contributes_graph(count: usize, date: date) {
    let data = get_json(json.contribue);
    draw_canvas(data);
}
fn generate_graph(label: Vec<String>, data: Vec<String>) {
    let option = set_option(arg);
    draw_graph(lavel, data, option);
}
fn genearate_gitgraph(data: Vec<json>) {
    draw_canvas();
}