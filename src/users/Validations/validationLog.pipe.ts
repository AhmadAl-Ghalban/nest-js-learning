import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidationLog implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('🚀 ~ ValidationPipe ~ transform ~ value:', value);
    return value;
  }
}
