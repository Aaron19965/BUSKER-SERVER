import { FilesService } from './../files/files.service';
import { ArtistImage } from 'src/apis/artistImage/entity/artistImage.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtAccessStrategy } from 'src/commons/jwt-access.stategy';
import { UserAuthority } from 'src/commons/role/entity/userAuthority.entity';
import { Category } from '../categories/entities/categories.entity';
import { ArtistsResolver } from './artists.resolver';
import { ArtistsService } from './artists.service';
import { Artist } from './entity/artist.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category, Artist, UserAuthority, ArtistImage]),
  ],
  providers: [ArtistsResolver, ArtistsService, JwtAccessStrategy, FilesService],
})
export class ArtistsModule {}
