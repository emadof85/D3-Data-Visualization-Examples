# D3 Data Visualization Examples

A comprehensive collection of interactive data visualizations built with D3.js, showcasing various charting techniques, data manipulation methods, and advanced visualization concepts.

## 🚀 Features

- **Interactive Visualizations**: Multiple examples demonstrating D3.js capabilities across different chart types
- **Vancouver Trails Visualization**: Geographic data visualization of hiking trails
- **D3 Pong Game**: Interactive game built with D3.js
- **Multiple Chart Examples**: Bar charts, pie charts, histograms, and more
- **Data Joining Techniques**: Examples of enter/update/exit patterns and transitions
- **Multiple Views and Linking**: Brushing, linking, and coordinated views
- **Scalable Architecture**: Modular JavaScript structure for easy extension
- **Responsive Design**: CSS styling for optimal viewing across devices

## 📁 Project Structure

```
├── README.md
├── d3-pong/
│   ├── index.html
│   ├── d3-pong.js
│   ├── d3.v8.min.js
│   └── style.css
├── Example_2/
│   ├── difficulty_bar_chart/
│   │   ├── index.html
│   │   ├── difficulty_bar.js
│   │   └── style.css
│   ├── region_pie_chart/
│   │   ├── index.html
│   │   ├── region_pie.js
│   │   └── style.css
│   ├── season_bar_chart/
│   │   ├── index.html
│   │   ├── season_bar.js
│   │   └── style.css
│   └── time_histogram/
│       ├── index.html
│       ├── time_histogram.js
│       └── style.css
├── Examples_1/
│   ├── index.html
│   ├── vancouver_trails_viz.html
│   ├── without_js.html
│   ├── css/
│   │   └── style.css
│   ├── data/
│   │   └── vancouver_trails.csv
│   └── js/
│       ├── d3.v7.min.js
│       ├── main.js
│       ├── scale.js
│       └── trails_viz.js
├── Joining Data/
│   ├── enter_update_exit_example/
│   │   ├── index.html
│   │   ├── enter_update_exit.js
│   │   └── style.css
│   ├── enter_update_exit_transitions/
│   │   ├── index.html
│   │   ├── transitions.js
│   │   └── style.css
│   ├── homework_dynamic_teams_board/
│   │   ├── index.html
│   │   ├── teams.js
│   │   ├── style.css
│   │   └── README.md
│   └── homework_joining_data/
│       ├── index.html
│       ├── homework.js
│       ├── style.css
│       └── README.md
└── Multiple Views/
    ├── lab5.pdf
    ├── Brushing & Linking/
    │   ├── index.html
    │   ├── css/
    │   │   └── style.css
    │   ├── data/
    │   │   └── sp_500_index.csv
    │   └── js/
    │       ├── main.js
    │       └── focusContextVis.js
    └── Linked Interactions/
        ├── Basic linkage/
        │   ├── index.html
        │   ├── README.md
        │   ├── css/
        │   │   └── style.css
        │   ├── data/
        │   │   └── vancouver_trails.csv
        │   └── js/
        │       ├── main.js
        │       ├── barchart.js
        │       └── scatterplot.js
        └── Multi-View Event Handler d3.dispatcher/
            ├── index.html
            ├── README.md
            ├── css/
            │   └── style.css
            ├── data/
            │   └── vancouver_trails.csv
            └── js/
                ├── main.js
                ├── barchart.js
                └── scatterplot.js
```

## 🛠️ Setup and Installation

### Prerequisites

- Modern web browser with JavaScript enabled
- Local web server (required for data loading)

### ⚠️ Important Note: Server Requirement

**To avoid CORS errors when loading data files, you MUST serve this project through a local web server instead of opening HTML files directly in the browser.**

Opening HTML files statically (e.g., double-clicking or `file://` protocol) will result in data loading failures due to browser security restrictions.

### Running the Project

1. **Clone the repository:**
   ```bash
   git clone https://github.com/emadof85/D3-Data-Visualization-Examples.git
   cd D3-Data-Visualization-Examples
   ```

2. **Start a local web server:**

   Choose one of the following methods:

   **Using Python 3:**
   ```bash
   python -m http.server 8000
   ```
   Then navigate to: `http://localhost:8000`

   **Using Python 2:**
   ```bash
   python -m SimpleHTTPServer 8000
   ```
   Then navigate to: `http://localhost:8000`

   **Using Node.js (if you have http-server installed):**
   ```bash
   npx http-server -p 8000
   ```
   Then navigate to: `http://localhost:8000`

   **Using PHP:**
   ```bash
   php -S localhost:8000
   ```
   Then navigate to: `http://localhost:8000`

   **Using Ruby:**
   ```bash
   ruby -run -e httpd . -p 8000
   ```
   Then navigate to: `http://localhost:8000`

3. **Open your browser** and navigate to the served URL to view the visualizations.

## 📊 Visualizations Included

### Examples_1: Vancouver Trails
- **Main Dashboard** (`Examples_1/index.html`): Overview of available visualizations
- **Vancouver Trails** (`Examples_1/vancouver_trails_viz.html`): Interactive map showing hiking trails with difficulty ratings and elevation data
- **Static Version** (`Examples_1/without_js.html`): Non-interactive version for comparison

### Example_2: Various Charts
- **Difficulty Bar Chart** (`Example_2/difficulty_bar_chart/index.html`): Bar chart showing trail difficulties
- **Region Pie Chart** (`Example_2/region_pie_chart/index.html`): Pie chart of trails by region
- **Season Bar Chart** (`Example_2/season_bar_chart/index.html`): Bar chart of trails by season
- **Time Histogram** (`Example_2/time_histogram/index.html`): Histogram of trail times

### Joining Data: Data Manipulation Examples
- **Enter/Update/Exit Example** (`Joining Data/enter_update_exit_example/index.html`): Demonstrates D3's enter/update/exit pattern
- **Enter/Update/Exit with Transitions** (`Joining Data/enter_update_exit_transitions/index.html`): Shows transitions in data joining
- **Dynamic Teams Board** (`Joining Data/homework_dynamic_teams_board/index.html`): Homework example of dynamic team visualization
- **Joining Data Homework** (`Joining Data/homework_joining_data/index.html`): Additional homework on data joining

### Multiple Views: Coordinated Visualizations
- **Brushing & Linking** (`Multiple Views/Brushing & Linking/index.html`): Focus+context visualization with brushing on S&P 500 data
- **Basic Linkage** (`Multiple Views/Linked Interactions/Basic linkage/index.html`): Linked bar chart and scatterplot for Vancouver trails
- **Multi-View Event Handler** (`Multiple Views/Linked Interactions/Multi-View Event Handler d3.dispatcher/index.html`): Advanced linked views using d3.dispatch

### Games and Interactive Examples
- **D3 Pong** (`d3-pong/index.html`): Interactive Pong game built with D3.js

## 🏗️ Architecture

The project follows a modular structure organized by example type:
- **HTML files** provide the structure and entry points for each visualization
- **JavaScript modules** handle data processing, visualization logic, and interactivity
- **CSS** provides responsive styling and visual enhancements
- **Data files** (CSV, etc.) contain raw data for visualizations
- **Examples are grouped by topic**: Basic charts, data joining, multiple views, and interactive games

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-visualization`)
3. Commit your changes (`git commit -m 'Add amazing visualization'`)
4. Push to the branch (`git push origin feature/amazing-visualization`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

For questions or suggestions, please open an issue on GitHub.

---

**Note:** Ensure your local server is running before attempting to view any visualizations to prevent data loading errors.