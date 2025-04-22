import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmCardContentDirective, HlmCardDirective, HlmCardHeaderDirective, HlmCardTitleDirective } from '@spartan-ng/ui-card-helm';
import { HlmSeparatorDirective } from '@spartan-ng/ui-separator-helm';
import { BrnSeparatorComponent } from '@spartan-ng/brain/separator';
import {finalize} from 'rxjs';
import {PhraseService} from '../../services/phrase.service';
import {DetailLessonCategory, Phrase} from '../../models/DetailLessonCategory.model';

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
  categorySlug: string = "";
  isLoading = false;

  audio: HTMLAudioElement | null = null;

  constructor(
    private router: ActivatedRoute,
    private phraseService: PhraseService,
  ) { }

  ngOnInit(): void {
    this.categorySlug = this.router.snapshot.params['categorySlug'];
    // console.log(this.categorySlug);
    this.isLoading = true;
    this.phraseService.getLessonCategory(this.categorySlug)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe({
          next: data => {
            this.category = data;
            this.phrases = data.phrases.map(p => ({ ...p, isPlaying: false }));
            this.keyVocabulary = data.phrases
              .filter(p => p.isKeyVocabulary)
              .map(p => ({ word: p.kinyarwanda, translation: p.english }));
          },
          error: (err) => console.log(err)
        }
      )
  }

  // Mock data for the category
  @Input() category: (DetailLessonCategory | null) = null

  // Mock data for phrases
  @Input() phrases: (Phrase & { isPlaying: boolean })[] = [
    //   {
    //     id: 1,
    //     kinyarwanda: "Muraho",
    //     english: "Hello",
    //     audioUrl: "#",
    //   },
    //   {
    //     id: 2,
    //     kinyarwanda: "Amakuru?",
    //     english: "How are you?",
    //     audioUrl: "#",
    //   },
    //   {
    //     id: 3,
    //     kinyarwanda: "Ni meza",
    //     english: "I'm fine",
    //     audioUrl: "#",
    //   },
    //   {
    //     id: 4,
    //     kinyarwanda: "Mwaramutse",
    //     english: "Good morning",
    //     audioUrl: "#",
    //   },
    //   {
    //     id: 5,
    //     kinyarwanda: "Mwiriwe",
    //     english: "Good afternoon",
    //     audioUrl: "#",
    //   },
    //   {
    //     id: 6,
    //     kinyarwanda: "Muramuke",
    //     english: "Good night",
    //     audioUrl: "#",
    //   },
  ]

  // Mock data for key vocabulary
  @Input() keyVocabulary: { word: string, translation: string }[] = [
    // { word: "Muraho", translation: "Hello" },
    // { word: "Mwaramutse", translation: "Good morning" },
    // { word: "Mwiriwe", translation: "Good afternoon" },
    // { word: "Muramuke", translation: "Good night" },
  ]

  playAudioForPhrase(phrase: Phrase & { isPlaying: boolean }) {
    this.phrases.forEach(p => {
      // Pause all other phrases
      if (p.id !== phrase.id && p.isPlaying) {
        p.isPlaying = false;
      }
    });


    if (phrase.isPlaying) {
      this.audio?.pause();
      phrase.isPlaying = false;
    } else {
      this.audio?.pause();
      phrase.isPlaying = true;
      if (!phrase.audioUrl) {
        phrase.isPlaying = false;
        return
      }
      this.audio = new Audio(phrase.audioUrl);
      this.audio.play();
      this.audio.onended = () => {
        phrase.isPlaying = false;
      };
    }
  }



}
