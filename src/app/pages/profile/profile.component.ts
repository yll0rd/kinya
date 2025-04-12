import { Component, Input } from '@angular/core';
import { BrnSeparatorComponent } from '@spartan-ng/brain/separator';
import { HlmAvatarImageDirective, HlmAvatarComponent, HlmAvatarFallbackDirective } from '@spartan-ng/ui-avatar-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import {
  HlmCardContentDirective,
  HlmCardDescriptionDirective,
  HlmCardDirective,
  HlmCardFooterDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective,
} from '@spartan-ng/ui-card-helm';
import { HlmSeparatorDirective } from '@spartan-ng/ui-separator-helm';


@Component({
  selector: 'app-profile',
  imports: [
    HlmAvatarImageDirective,
    HlmAvatarComponent,
    HlmAvatarFallbackDirective,
    
    HlmButtonDirective,

    HlmCardContentDirective,
    HlmCardDescriptionDirective,
    HlmCardDirective,
    HlmCardFooterDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,

    HlmSeparatorDirective,

    BrnSeparatorComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  // Mock user data
  @Input() user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatarUrl: "/placeholder.svg?height=100&width=100",
    stats: {
      lessonsCompleted: 12,
      streakDays: 7,
    },
    achievements: [
      {
        id: 1,
        title: "First Steps",
        description: "Completed your first lesson",
        icon: "pi pi-check text-green-500",
      },
      {
        id: 2,
        title: "Quick Learner",
        description: "Completed 10 lessons",
        icon: "pi pi-trophy text-yellow-500",
      },
      {
        id: 3,
        title: "Consistent",
        description: "Maintained a 7-day streak",
        icon: "pi pi-calendar text-blue-500",
      },
    ],
  }

}
