import React, { useState } from 'react';
import Plot from 'react-plotly.js';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedIssues, setSelectedIssues] = useState([]);

  const lineData = [
    {
      x: ["2023-01", "2023-02", "2023-03", "2023-04", "2023-05"],
      y: [10, 20, 25, 30, 20],
      name: "Critical",
      type: "scatter",
      mode: "lines+markers",
      marker: { size: 8 },
      line: { width: 3, color: "red" },
    },
    {
      x: ["2023-01", "2023-02", "2023-03", "2023-04", "2023-05"],
      y: [30, 25, 40, 35, 25],
      name: "Intermediate",
      type: "scatter",
      mode: "lines+markers",
      marker: { size: 8 },
      line: { width: 3, color: "orange" },
    },
    {
      x: ["2023-01", "2023-02", "2023-03", "2023-04", "2023-05"],
      y: [50, 45, 35, 30, 40],
      name: "Mild",
      type: "scatter",
      mode: "lines+markers",
      marker: { size: 8 },
      line: { width: 3, color: "green" },
    },
  ];

  const barData = [
    {
      x: ["2023-01", "2023-02", "2023-03", "2023-04", "2023-05"],
      y: [10, 20, 25, 30, 20],
      name: "Critical",
      type: "bar",
      marker: { color: "red" },
    },
    {
      x: ["2023-01", "2023-02", "2023-03", "2023-04", "2023-05"],
      y: [30, 25, 40, 35, 25],
      name: "Intermediate",
      type: "bar",
      marker: { color: "orange" },
    },
    {
      x: ["2023-01", "2023-02", "2023-03", "2023-04", "2023-05"],
      y: [50, 45, 35, 30, 40],
      name: "Mild",
      type: "bar",
      marker: { color: "green" },
    },
  ];

  const config = {
    displayModeBar: true,
    displaylogo: false,
  };

  const layout = {
    title: "Issue Categories Over Time",
    barmode: 'stack',  // Set bar mode to stacked
    xaxis: { title: "Date" },
    yaxis: { title: "Count" },
    hovermode: "closest",
  };

  const issuesData = {
    critical: ["Critical Issue 1", "Critical Issue 2", "Critical Issue 3"],
    intermediate: ["Intermediate Issue 1", "Intermediate Issue 2"],
    mild: ["Mild Issue 1", "Mild Issue 2", "Mild Issue 3"],
  };

  const handleLineClick = (event) => {
    const category = event.points[0].data.name.toLowerCase();
    setSelectedCategory(category);
    setSelectedIssues(issuesData[category]);
  };

  return (
    <div>
      <h1>Interactive Line and Stacked Bar Graph</h1>
      <Plot
        data={[...lineData]}
        layout={layout}
        config={config}
        onClick={handleLineClick}  // Handles clicks on the lines or points
      />

<Plot
        data={[...barData]}
        layout={layout}
        config={config}
        onClick={handleLineClick}  // Handles clicks on the lines or points
      />

      {selectedCategory && (
        <div>
          <h2>{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Issues</h2>
          <ul>
            {selectedIssues.map((issue, index) => (
              <li key={index}>{issue}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
