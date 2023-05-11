<?php

namespace Solspace\Freeform\Library\Serialization;

use Doctrine\Common\Annotations\AnnotationReader;
use Solspace\Freeform\Library\Serialization\Normalizers\CustomNormalizer;
use Solspace\Freeform\Library\Serialization\Normalizers\IdentificationNormalizer;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory;
use Symfony\Component\Serializer\Mapping\Loader\AnnotationLoader;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class FreeformSerializer extends Serializer
{
    public function __construct()
    {
        $classMetadataFactory = new ClassMetadataFactory(new AnnotationLoader(new AnnotationReader()));

        $encoders = [new JsonEncoder()];
        $normalizers = [
            new IdentificationNormalizer(),
            new CustomNormalizer(),
            new ObjectNormalizer($classMetadataFactory),
        ];

        parent::__construct($normalizers, $encoders);
    }
}