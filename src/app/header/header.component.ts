import { Component, OnInit } from '@angular/core';
import {CarrinhoService} from '../carrinho/carrinho.service';

@Component({
  selector: 'mt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit() {
  }

}
