import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-draw-binary-tree',
  templateUrl: './draw-binary-tree.component.html',
  styleUrls: ['./draw-binary-tree.component.css']
})
export class DrawBinaryTreeComponent implements OnInit {
  jsontree;
  private margin = {top: 20, right: 20, bottom: 20, left: 20};
  private width: number;
  private height: number;

  constructor() {
    this.width = 960 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
  }

  ngOnInit() {
    let treeData = [{ "name": "1", "children": [{}, { "name": "2", "children": [{}, { "name": "3", "children": [{ "name": "4", "children": [{ "name": "6", "children": [{ "name": "10", "children": [] }, {}] }, { "name": "7", "children": [{ "name": "11", "children": [] }, {}] }] }, { "name": "5", "children": [{}, { "name": "9", "children":[] }] }] }] }] }];
    // treeData = [{"name": "2", "children":[{}, {"name": "3", "children":[]}]}];
    // treeData = [{"name": "3", "children":[{"name": "2", "children":[]}, {}]}];
    this.jsontree = JSON.stringify(treeData[0]);
    this.onChangeData();
  }

  onChangeData() {
    this.updateTree(JSON.parse(this.jsontree));
  }
  
  drawTree(rootnode) {
    const g = d3.select('svg')
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom)
                .append('g')
                .attr('transform', 'translate(' + this.margin.left + "," + this.margin.top +")");

    const treemap = d3.tree().size([this.width, this.height]);
    const nodes = treemap(d3.hierarchy(rootnode));
    const link = g.selectAll(".link")
                .data(nodes.descendants().slice(1))
                .enter()
                .append("path")
                .attr("class", d => d.data.children ? "treelink" : "treenolink")
                .attr("d", d => "M" + d.x + "," + d.y
                                + "C" + d.x + "," + (d.y + d.parent.y) /2
                                + " " + d.parent.x + "," + (d.y + d.parent.y) / 2
                                + " " + d.parent.x + "," + d.parent.y);

    const node = g.selectAll(".node")
                .data(nodes.descendants())
                .enter()
                .append("g")
                .attr("transform", d => "translate(" + d.x + "," + d.y + ")");

    node.append("circle")
        .attr("class", d => d.data.name ? "treecircle" : "treenocircle");

    node.append("text")
        .attr("class", "treetext")
        .attr("dy", ".35em")
        .style("text-anchor", "middle")
        .text(d => d.data.name);
  }
}
