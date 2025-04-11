import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmCardContentDirective, HlmCardDirective, HlmCardHeaderDirective, HlmCardTitleDirective } from '@spartan-ng/ui-card-helm';
import { HlmSeparatorDirective } from '@spartan-ng/ui-separator-helm';
import { BrnSeparatorComponent } from '@spartan-ng/brain/separator';

@Component({
  selector: 'app-detail-lesson',
  imports: [
    HlmBadgeDirective,
    HlmButtonDirective,

    HlmCardContentDirective,
    HlmCardDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,

    HlmSeparatorDirective,

    BrnSeparatorComponent,
    RouterLink
  ],
  templateUrl: './detail-lesson.component.html',
  styleUrl: './detail-lesson.component.css'
})
export class DetailLessonComponent implements OnInit {
  categoryId: number = 1;

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.categoryId = parseInt(this.router.snapshot.params['id']);
  }

  // Mock data for the category
  @Input() category = {
    id: this.categoryId,
    title: "Greetings",
    description: "Learn common greetings and introductions in Kinyarwanda",
    progress: 75,
  }

  // Mock data for phrases
  @Input() phrases = [
    {
      id: 1,
      kinyarwanda: "Muraho",
      english: "Hello",
      audioUrl: "#",
    },
    {
      id: 2,
      kinyarwanda: "Amakuru?",
      english: "How are you?",
      audioUrl: "#",
    },
    {
      id: 3,
      kinyarwanda: "Ni meza",
      english: "I'm fine",
      audioUrl: "#",
    },
    {
      id: 4,
      kinyarwanda: "Mwaramutse",
      english: "Good morning",
      audioUrl: "#",
    },
    {
      id: 5,
      kinyarwanda: "Mwiriwe",
      english: "Good afternoon",
      audioUrl: "#",
    },
    {
      id: 6,
      kinyarwanda: "Muramuke",
      english: "Good night",
      audioUrl: "#",
    },
  ]

  // Mock data for key vocabulary
  @Input() keyVocabulary = [
    { word: "Muraho", translation: "Hello" },
    { word: "Mwaramutse", translation: "Good morning" },
    { word: "Mwiriwe", translation: "Good afternoon" },
    { word: "Muramuke", translation: "Good night" },
  ]

}
