import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VacunasService } from './services/vacunas/vacunas.service';
import { RolesService } from './services/roles/roles.service';
import { EmpleadosService } from './services/empleados/empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 empleadoForm!: FormGroup;
 roles: any;
 empleados: any;
 vacunas: any;


  constructor(
  
    public fb: FormBuilder,
    public VacunasService: VacunasService,
    public RolesService: RolesService,
    public EmpleadosService: EmpleadosService
  ) {


  }
  ngOnInit(): void {

    this.empleadoForm = this.fb.group({

      /*emp_id : [''],*/
      cedula : ['', Validators.required],
      nombres : ['', Validators.required],
      apellidos : ['', Validators.required],
      email : ['', Validators.required],
      //estado : ['', Validators.required],
      //fechanacimiento : ['', Validators.required],
      //direccion : ['', Validators.required],
      //telefono : ['', Validators.required],
      //estadovacuna : ['', Validators.required],
      //fechavacuna : ['', Validators.required],
      //ndosis : ['', Validators.required],
      rol : ['', Validators.required],
      //vacuna : ['', Validators.required],
      usuario : ['', Validators.required],
      contrasena : ['', Validators.required]


    });;

    this.RolesService.getAllRoles().subscribe(resp => {
      this.roles = resp;
    },
    error => { console.error(error)}
    );

  }

  guardar(): void{

    this.EmpleadosService.saveEmpleado(this.empleadoForm.value).subscribe(resp => {
      this.empleadoForm.reset();
    },
    error => { console.error(error)}
    );

  }


}
