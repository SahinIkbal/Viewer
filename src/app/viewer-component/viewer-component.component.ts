import { Component, OnInit } from '@angular/core';
import { IfcViewerAPI } from 'web-ifc-viewer';

@Component({
  selector: 'app-viewer-component',
  templateUrl: './viewer-component.component.html',
  styleUrls: ['./viewer-component.component.css']
})
export class ViewerComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const container = document.getElementById('viewer-container')!;
    const viewer = new IfcViewerAPI({ container });
    viewer.axes.setAxes();
    viewer.grid.setGrid();


    window.onmousemove = () => viewer.IFC.selector.prePickIfcItem();
    window.onclick = () => viewer.IFC.selector.pickIfcItem(false,false);
    window.ondblclick = () => viewer.IFC.selector.highlightIfcItem();
    window.ondblclick = () => viewer.context.castRayIfc()?.instanceId;
    

    window.onkeydown = (event) => {
      if(event.code === 'Escape') {
          viewer.IFC.selector.unpickIfcItems();
          viewer.IFC.selector.unHighlightIfcItems(); 
      }
  }

    viewer.IFC.setWasmPath("/assets/");
    const input = document.getElementById("file-input")!;

    input.addEventListener("change",

      async (changed) => {

        const file = (<HTMLInputElement>changed.target).files![0];
        const ifcURL = URL.createObjectURL(file);
        const model = await viewer.IFC.loadIfcUrl(ifcURL);
        viewer.shadowDropper.renderShadow(model.modelID);
      },

      false
    );
  }

}
